import { ICategory, IChild } from "@/@types/model"
import { fetChildrenOption, fetChildrenProps } from "@/app/actions"
import { create } from "zustand"

export type TargetFilter =
  | "categoryId"
  | "subCategoryId"
  | "brandId"
  | "brandTypeId"
  | "brandTransmissionId"

export interface IAddNewProductService {
  subCategories: ICategory[]
  category: {
    value: number | null
    label: string
  }
  subCategory: {
    value: number | null
    label: string
  }

  children: IChild[]

  childValues: Map<
    string,
    {
      value: number | null
      other: string
    }
  >

  isChildrenLoading: boolean
  showTable: boolean
  result: { label: string; value: string }[]
  changeOther: (childId: number, value: number, other: string) => void
  selectCategory: (
    value: number,
    label: string,
    list: ICategory[] | null
  ) => void
  selectSubCategory: (value: number | null, label: string) => void
  selectOption: (childId: number, option: number, hasChild?: boolean) => void
  submit: () => void
  reset: () => void
}

export const addNewProductService = create<IAddNewProductService>(
  (set, get) => ({
    subCategories: [],
    category: {
      value: 0,
      label: "",
    },
    subCategory: {
      value: 0,
      label: "",
    },
    children: [],
    isChildrenLoading: false,
    optionsValues: new Map(),
    childValues: new Map(),
    showTable: false,
    result: [],
    async selectCategory(value, label, list) {
      set(() => addNewProductService.getInitialState())

      set(() => ({
        category: {
          value,
          label,
        },
        subCategories: list || [],
        optionsValues: new Map(),
      }))
    },
    async selectSubCategory(value, label) {
      set(() => ({
        subCategory: {
          value,
          label,
        },
        optionsValues: new Map(),
        isChildrenLoading: true,
      }))

      const data = await fetChildrenProps(value!)

      const InitOptions = new Map<
        string,
        {
          value: number | null
          other: string
        }
      >([])

      data.map((item) => {
        if (!InitOptions.has(String(item.id))) {
          InitOptions.set(String(item.id), {
            value: null,
            other: "",
          })
        }
      })

      set(() => ({
        children: data || [],
        childValues: InitOptions,
        isChildrenLoading: false,
      }))
    },
    async selectOption(childId, option, hasChild) {
      let options = get().childValues

      options.set(String(childId), {
        value: option,
        other: "",
      })

      set(() => ({
        childValues: options,
      }))

      if (hasChild) {
        // fetch child.
        const childList = await fetChildrenOption(option)

        const childValues = get().childValues
        const optionsOfChildren = get().children

        childValues.set(String(childId), {
          value: option,
          other: "",
        })

        set(() => ({
          children: optionsOfChildren.concat(childList),
          childValues,
        }))
      }
    },
    changeOther(childId, value, other) {
      const childValues = get().childValues
      childValues.set(String(childId), {
        value: value,
        other,
      })
      set(() => ({
        childValues,
      }))
    },
    submit() {
      let results: { label: string; value: string }[] = []

      get().childValues.forEach((val, key) => {
        const child = get().children.find((item) => item.id === +key)

        const optionValue = child?.options.find(
          (item) => item.id === Number(val.value)
        )

        results.push({
          label: child?.name || "",
          value: val.other ? val.other : optionValue?.name || "",
        })
      })

      set(() => ({
        showTable: true,
        result: results,
      }))
    },
    reset() {
      set(() => addNewProductService.getInitialState())
    },
  })
)
