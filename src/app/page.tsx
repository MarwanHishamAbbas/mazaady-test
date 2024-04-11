import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CirclePlus, Heart } from "lucide-react"
import { Metadata } from "next"
import ProductCard from "../components/ProductCard"
import { ProfileCard } from "../components/ProfileCard"
import { QRCodeCard } from "../components/QRCodeCard"
import Image from "next/image"

const PRODUCTS_COUNTS = 5

export const metadata: Metadata = {
  title: "Mazaady - Homepage",
  description: "Mazaady - Homepage",
}

export default async function Page() {
  return (
    <div className="container">
      <main className="my-10 grid grid-cols-12 gap-6 bg-transparent items-start">
        <section className="col-span-12 lg:col-span-4 grid grid-cols-4 gap-6 items-start relative">
          <aside className=" bg-white rounded-2xl col-span-4 md:col-span-2 lg:col-span-4">
            <ProfileCard.container>
              <ProfileCard.content />
              <ProfileCard.footer />
            </ProfileCard.container>
          </aside>
          <aside className="block md:hidden bg-white rounded-2xl col-span-4 md:col-span-2 lg:col-span-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <QRCodeCard.root>
                    <QRCodeCard.bar />
                  </QRCodeCard.root>
                </AccordionTrigger>
                <AccordionContent>
                  <QRCodeCard.root>
                    <QRCodeCard.header />
                    <QRCodeCard.source />
                  </QRCodeCard.root>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>
          <aside className="hidden md:block col-span-4 md:col-span-2 lg:col-span-4 self-start">
            <QRCodeCard.root>
              <QRCodeCard.bar />
              <QRCodeCard.header />
              <QRCodeCard.source />
            </QRCodeCard.root>
          </aside>
        </section>
        <section className="col-span-12 lg:col-span-8 bg-white rounded-2xl p-6">
          <div className="flex justify-between">
            <div className="flex flex-nowrap gap-4 flex-1 lg:flex-initial">
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className={cn(
                  "border bg-slate-50 font-normal text-sm text-gray-600 rounded-2xl capitalize lg:px-6 lg:py-2 p-2 flex-1",
                  {
                    "border-orange-500 text-orange-500 font-medium": true,
                  }
                )}
              >
                products
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className={cn(
                  "border bg-slate-50 font-normal text-sm text-gray-600 rounded-2xl capitalize lg:px-6 lg:py-2 p-2 flex-1",
                  {
                    "border-orange-500 text-orange-500 font-medium": false,
                  }
                )}
              >
                articles
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className={cn(
                  "border bg-slate-50 font-normal text-sm text-gray-600 rounded-2xl capitalize lg:px-6 lg:py-2 p-2 flex-1",
                  {
                    "border-orange-500 text-orange-500 font-medium": false,
                  }
                )}
              >
                reviews
              </Button>
            </div>
            <Button
              variant="default"
              size="lg"
              className="flex-nowrap items-center bg-gradient-to-r from-pink-600 to-orange-400 text-white font-medium p-3 rounded-xl py-4 hidden lg:flex"
            >
              <CirclePlus className="w-6 h-6" />
              <span className="px-2 capitalize text-sm">Add review</span>
            </Button>
          </div>
          <div>
            <div className="flex items-center my-6">
              <h2 className="text-3xl font-medium capitalize">products</h2>
              <span className="text-sm text-gray-700 mx-1.5">
                ({PRODUCTS_COUNTS})
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {Array.from({ length: PRODUCTS_COUNTS }).map((_, index) => (
              <ProductCard key={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
