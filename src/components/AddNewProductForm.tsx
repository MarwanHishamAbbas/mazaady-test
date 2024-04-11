"use client"

import { ICategory } from "@/types/model"
import { addNewProductService } from "@/services/addNewProductService"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Fragment } from "react"
import SearchableSelect from "react-select"

export function AddNewProductForm({
  categories,
}: {
  categories: ICategory[] | null
}) {
  const {
    subCategories,
    category,
    subCategory,
    children,
    childValues,
    selectCategory,
    selectSubCategory,
    selectOption,
    changeOther,
    submit,
  } = addNewProductService()

  const LIST = categories
    ? categories.map((item) => ({
        label: item.name,
        value: item.id,
      }))
    : [{ value: 0, label: "" }]

  return (
    <form
      action={() => {
        submit()
      }}
      className="bg-white flex flex-col gap-6 rounded-3xl p-8 w-full md:w-3/5 lg:w-1/2 mx-auto"
    >
      <div className="flex flex-col gap-4">
        <Label htmlFor="CATEGORY">Category</Label>
        <SearchableSelect
          options={LIST}
          onChange={(val) => {
            let list =
              categories && val
                ? categories.find((item) =>
                    val?.value ? item.id === +val?.value : null
                  )?.children || []
                : []

            selectCategory(val?.value || 0, val?.label || "", list)
          }}
          value={category}
          isClearable
          id="CATEGORY"
        />
      </div>

      <div className="flex flex-col gap-4">
        <Label htmlFor="SUB_CATEGORY">Sub Category</Label>
        <SearchableSelect
          options={subCategories.map((item) => ({
            label: item.name,
            value: item.id,
          }))}
          onChange={(val) => {
            selectSubCategory(val?.value || null, val?.label || "")
          }}
          value={subCategory}
          isDisabled={!category.value}
          isClearable
          id="SUB_CATEGORY"
        />
        {subCategory.value === null ? (
          <Input type="text" value="" onChange={() => {}} />
        ) : null}
      </div>

      {subCategory.value ? (
        <>
          {children.map((item) => {
            return (
              <Fragment key={item.id}>
                <div className="flex flex-col gap-4">
                  <Label>{item.name}</Label>
                  <SearchableSelect
                    options={item.options
                      .map((option) => ({
                        label: option.name,
                        value: option.id,
                        child: option.child,
                      }))
                      .concat([{ value: -1, label: "Other", child: false }])}
                    onChange={(val) => {
                      selectOption(item.id, val?.value || 0, val?.child)
                    }}
                    value={{
                      value: childValues.has(String(item.id)).valueOf()
                        ? childValues.get(String(item.id))?.value !== -1
                          ? item.options.find(
                              (option) =>
                                option.id ===
                                childValues.get(String(item.id))?.value
                            )?.id
                          : -1
                        : 0,
                      label: childValues.has(String(item.id)).valueOf()
                        ? childValues.get(String(item.id))?.value !== -1
                          ? item.options.find(
                              (option) =>
                                option.id ===
                                childValues.get(String(item.id))?.value
                            )?.name
                          : "Other"
                        : "",
                      child: item.options.find(
                        (option) =>
                          option.id === childValues.get(String(item.id))?.value
                      )?.child,
                    }}
                    isClearable
                  />
                  {childValues.has(String(item.id)).valueOf() ? (
                    childValues.get(String(item.id))?.value === -1 ? (
                      <Input
                        className="w-full"
                        onChange={(e) => {
                          changeOther(item.id, -1, e.target.value)
                        }}
                      />
                    ) : null
                  ) : null}
                </div>
              </Fragment>
            )
          })}
        </>
      ) : null}

      <Button type="submit" className="w-full" size="lg">
        Add a new product
      </Button>
    </form>
  )
}
