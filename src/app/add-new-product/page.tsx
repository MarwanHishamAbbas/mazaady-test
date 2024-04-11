import { Metadata } from "next"
import { AddNewProductForm } from "../_components/AddNewProductForm"
import CreatedProductTable from "../_components/CreatedProductTable"
import { fetCategories } from "../actions"

export const metadata: Metadata = {
  title: "Add a new product",
  description: "Add a new product",
}

export default async function page() {
  const data = await fetCategories()

  return (
    <section className="container min-h-screen py-8">
      <AddNewProductForm categories={data} />
      <CreatedProductTable />
    </section>
  )
}
