"use server"

import { ICategory, IChild } from "@/types/model"
import FetchService from "@/lib/api/config"

export async function fetCategories() {
  const data = await new FetchService().get<{ categories: ICategory[] }>(
    "/v1/get_all_cats"
  )

  return data.categories
}

export async function fetChildrenProps(id: number) {
  const data = await new FetchService().get<IChild[]>(
    `/v1/properties?cat=${id}`
  )

  return data
}

export async function fetChildrenOption(id: number) {
  const data = await new FetchService().get<IChild[]>(
    `/v1/get-options-child/${id}`
  )

  return data
}
