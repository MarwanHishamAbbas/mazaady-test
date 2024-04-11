import "@testing-library/jest-dom"
import { fireEvent, render } from "@testing-library/react"
import { describe } from "node:test"
import { AddNewProductForm } from "../src/app/_components/AddNewProductForm"

const categories = [
  {
    id: 1,
    name: "سيارات ودرجات ومستلزماتها",
    description: null,
    image:
      "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/o0XfOKPJ8qbPv3eTGohQ8lXafJ5nvmOJSQYIFNHW.png",
    slug: "cars-motorcycles-accessories",
    children: [
      {
        id: 13,
        name: "سيارات",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/kEE9v9xOHnZrprP24h76ZmEL6iuXPOKetgrkyoY6.png",
        slug: "cars",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 1,
      },
      {
        id: 14,
        name: "قطع غيار السيارات والإكسسوارات",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/2LpHboKSmYu9YE55pJWuRpEZkQ8qmeXzVRU6LnZ1.png",
        slug: "auto-parts-accessories",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 15,
        name: "دراجات نارية ودبابات",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/dsMm47dXgwUnnq7LnbgXwVTuNSqAXBYpHUdnCNfI.png",
        slug: "motorcycles",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 1,
      },
      {
        id: 16,
        name: "دراجات هوائية",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/xHMFRm6nzB7lKppTMFMT6iKrQdFycual7Iaxge3f.png",
        slug: "bicycles",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 17,
        name: "مستلزمات الدراجات النارية والهوائية",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/5fROaAcgSQQS5oEjBTsFn7L4HfKtOtaP1Tsb7jpu.png",
        slug: "motorcycles-bicycles-accessories",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 100,
        name: "لوحات السيارات",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/pJ392yoZzlpidyV6HahI9EopoArg3g7p51fQGqOq.png",
        slug: "vehicle-plates",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 115,
        name: "dfdfdfd",
        description: null,
        image: "https://staging.mazaady.com/images/empty.png",
        slug: "dfdfdfd",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
    ],
    circle_icon:
      "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/circle_icon2/xDADUsHAoXG5F5IBc8vkzo7VimMmxV2uw1Ty3c3V.png",
    disable_shipping: 0,
  },
  {
    id: 2,
    name: "تجهيزات الأثاث والمفروشات",
    description: null,
    image:
      "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/ITbpjt3i0REMt1Xy1i4p3V7eV7UMDtRvj5oc3BbM.png",
    slug: "furniture-furnishings-fittings",
    children: [
      {
        id: 18,
        name: "الأثاث والمفروشات",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/PANmuF9ZBKnZF4POad76I5pyQRzS0aZ6G7DCAwEw.png",
        slug: "furniture-furnishings",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 19,
        name: "أثاث ومعدات مكتبية",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/O0xZ5mzWRSdA10HIN9Z4FeJgd7aFnpmwYxmh5FGg.png",
        slug: "office-furniture-equipment",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 20,
        name: "ألعاب أطفال ومستلزماتها",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/B2CymikMQAqGgXGgsdVYnBVsTVyDSzUDI3dlolZE.png",
        slug: "kids-toys-accessories",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 21,
        name: "معدات مطاعم ومطابخ",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/zAONXWADvDmKqa7RBcKQDQR5PEqz59WhbrDB7H68.png",
        slug: "restaurants-kitchens-equipment",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 22,
        name: "تحف وهدايا",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/2/9LTbJusjswrj9eXEQeJzRly8NOhTEojVQU2wNp4S.jpg",
        slug: "modern-antique-gifts",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
      {
        id: 103,
        name: "منتجات العناية المنزلية",
        description: null,
        image:
          "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/1/Pk3PmgTWtlYpCmqS2mIijJyWg4sTikXcym5Mu9zy.png",
        slug: "home-care-products",
        children: null,
        circle_icon: "https://staging.mazaady.com/images/empty.png",
        disable_shipping: 0,
      },
    ],
    circle_icon:
      "https://mazaady-test.s3.us-east-2.amazonaws.com/categories/circle_icon2/IhYwMcbRrZDHIXVP9EeIEMJreyY456LeueRYkGQK.png",
    disable_shipping: 0,
  },
]

describe("Form add a new product", () => {
  describe("Render", () => {
    it("form must have a Field Category", async () => {
      const { container } = render(
        <AddNewProductForm categories={categories} />
      )

      const CategoryElem = container.querySelector("#CATEGORY")
      expect(CategoryElem).toBeInTheDocument()
    })

    it("form must have a Field sub category", async () => {
      const { container } = render(
        <AddNewProductForm categories={categories} />
      )

      const subCategoryElem = container.querySelector("#SUB_CATEGORY")
      expect(subCategoryElem).toBeInTheDocument()
    })
  })

  describe("Behaviors", () => {
    it("Dropdown Category must be controlled", () => {
      const { container } = render(
        <AddNewProductForm categories={categories} />
      )

      const categoryElem = container.querySelector(
        "#CATEGORY input[role='combobox']"
      )

      fireEvent.change(categoryElem, { target: { value: 1 } })

      const value = +categoryElem.getAttribute("value")

      expect(value).toEqual(1)
    })

    it("Dropdown Sub Category must be controlled", () => {
      const { container } = render(
        <AddNewProductForm categories={categories} />
      )

      const subCategoryElem = container.querySelector(
        "#SUB_CATEGORY input[role='combobox']"
      )

      fireEvent.change(subCategoryElem, { target: { value: 13 } })

      const value = +subCategoryElem.getAttribute("value")

      expect(value).toEqual(13)
    })

    it("render options searchable dropdown when select sub category", () => {
      const { container } = render(
        <AddNewProductForm categories={categories} />
      )

      const categoryElem = container.querySelector(
        "#CATEGORY input[role='combobox']"
      )

      const subCategoryElem = container.querySelector(
        "#SUB_CATEGORY input[role='combobox']"
      )

      fireEvent.change(categoryElem, { target: { value: 1 } })
      fireEvent.change(subCategoryElem, { target: { value: 13 } })

      const selectableLength = container.querySelectorAll(
        "input[role='combobox']"
      ).length

      setTimeout(() => {
        expect(selectableLength).toBeGreaterThan(2)
      }, 500)
    })

    it("Sub category must be disabled if not selected main category.", () => {
      const { container } = render(
        <AddNewProductForm categories={categories} />
      )

      const subCategoryElem = container
        .querySelector("#SUB_CATEGORY input[role='combobox']")
        .getAttribute("disabled")

      expect(subCategoryElem).toMatch("")
    })
  })
})
