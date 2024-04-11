"use client"
import ImageResponsive from "@/components/ImageResponsive"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import {
  Bell,
  CirclePlus,
  Gift,
  Globe,
  Home,
  Menu,
  PlusCircle,
  Rss,
  Search,
} from "lucide-react"
import Image from "next/image"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

function NavLink({ url, title }: { url: string; title: string }) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "relative h-full text-gray-400 font-medium flex items-center transition-all duration-75 ease-in",
        {
          "after:content-[''] after:absolute after:bottom-0 after:right-0 after:left-0 after:h-1.5 after:rounded-t-md after:bg-[#D20653] text-[#D20653] font-semibold":
            pathname === url,
        }
      )}
    >
      <Link href={url}>{title}</Link>
    </div>
  )
}

export default function Layout() {
  const router = useRouter()

  return (
    <div className="shadow w-full bg-white">
      <div className="container grid grid-cols-2 h-16">
        <div className="w-auto col-span-1 flex flex-nowrap items-center gap-8">
          <Sheet>
            <SheetTrigger className="block lg:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent className="w-5/6 sm:w-4/6 md:w-1/3 lg:w-2/6 flex flex-col justify-start items-start gap-6 py-6">
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2">
                  <Home />
                  Home
                </Link>
              </SheetClose>
              <Separator />
              <SheetClose asChild>
                <Link
                  href="/ add-product"
                  className={buttonVariants({
                    variant: "default",
                    size: "lg",
                    className:
                      "flex flex-nowrap items-center bg-gradient-to-r from-pink-600 to-orange-400 text-white font-medium p-3 rounded-xl py-4",
                  })}
                >
                  <PlusCircle />
                  <span>Add a new Product</span>
                </Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
          <Link href="/">
            <Image
              src="/brand-logo.svg"
              alt="mazaady"
              loading="lazy"
              width={120}
              height={40}
            />
          </Link>
          <div className="hidden lg:flex flex-nowrap items-center gap-8 h-full">
            <NavLink url="/" title="Home" />
            <NavLink url="/blog" title="Blog" />
            <NavLink url="/gifts" title="Gifts" />
          </div>
        </div>
        <div className="col-span-1 flex flex-nowrap justify-end items-center gap-4 py-2">
          <Search />
          <Separator orientation="vertical" color="gray" />
          <Bell />
          <Separator orientation="vertical" color="gray" />
          <Image
            src="/user.png"
            width={1000}
            height={1000}
            className="rounded-full size-10"
            alt="User"
          />

          <Separator
            orientation="vertical"
            color="gray"
            className="hidden lg:block"
          />
          <Button
            variant="default"
            size="lg"
            className="hidden lg:flex flex-nowrap items-center bg-gradient-to-r from-pink-600 to-orange-400 text-white font-medium p-3 rounded-xl py-4 mx-4"
            onClick={() =>
              router.push("/add-product", {
                scroll: true,
              })
            }
          >
            <CirclePlus />
            <span className="px-4">Add new product</span>
          </Button>
          <Globe className="hidden lg:block" />
          <Separator orientation="vertical" className="hidden lg:block" />
          <span className="uppercase font-semibold text-xl hidden lg:block">
            en
          </span>
        </div>
      </div>
    </div>
  )
}
