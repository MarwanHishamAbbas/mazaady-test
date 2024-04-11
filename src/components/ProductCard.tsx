import ImageResponsive from "@/components/ImageResponsive"
import { cn } from "@/lib/utils"
import { Heart } from "lucide-react"
import Image from "next/image"

export default function ProductCard() {
  return (
    <div className="flex justify-between">
      <div className="relative flex gap-4">
        <div
          className={
            "absolute top-2 left-2 cursor-pointer block lg:hidden z-20 p-1 rounded-full bg-white"
          }
        >
          <Heart color={"black"} />
        </div>
        <div className="relative">
          <Image
            src="/product.png"
            width={1000}
            height={1000}
            className="w-[100px] h-full lg:w-[145px] lg:h-[130px] object-fill"
            alt=""
          />
          <div
            className={cn(
              "absolute bottom-0 bg-pink-600 text-white z-20 rounded-tl-full rounded-br-full right-0 py-1 px-2 lg:py-2 lg:px-3 text-xs text-center",
              {
                "bg-orange-500": true,
              }
            )}
          >
            {true ? "Hot Seller" : "live Auction"}
          </div>
        </div>

        <div className="text-xs lg:text-base space-y-2">
          <h3>Six-piece clothing set blouse - pants - hat and ...</h3>
          <p className="text-gray-500">
            starting price <strong className="text-black">1000 EGP</strong>
          </p>
          <div>
            <h4 className="text-gray-500 mb-1">Lot Starts in</h4>
            <div className="flex justify-between gap-3">
              <p className="bg-orange-100 py-1.5 px-3 text-orange-500 rounded-full flex-1 text-center">
                2 Days
              </p>
              <p className="bg-orange-100 py-1.5 px-3 text-orange-500 rounded-full flex-1 text-center">
                10 Hours
              </p>
              <p className="bg-orange-100 py-1.5 px-3 text-orange-500 rounded-full flex-1 text-center">
                5 Minutes
              </p>
            </div>
          </div>
        </div>
      </div>
      <Heart
        className={"cursor-pointer hidden lg:block"}
        fill={true ? "red" : "transparent"}
        color={true ? "red" : "black"}
      />
    </div>
  )
}
