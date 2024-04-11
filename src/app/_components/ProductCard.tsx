import ImageResponsive from "@/components/ImageResponsive";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

export default function ProductCard({
  isHotSeller,
  isFav,
}: {
  isHotSeller: boolean;
  isFav: Boolean;
}) {
  return (
    <div className="grid grid-cols-6 gap-4 w-full">
      <div className="h-28 col-span-2 lg:col-span-1 relative overflow-hidden rounded-3xl">
        <div
          className={
            "absolute top-2 left-2 cursor-pointer block lg:hidden z-20 p-1 rounded-full bg-white"
          }
        >
          <Heart
            fill={isFav ? "red" : "transparent"}
            color={isFav ? "red" : "black"}
          />
        </div>
        <ImageResponsive
          src="/product.png"
          alt="Jeep Car, new, used for only one time"
        />
        <div
          className={cn(
            "absolute bottom-0 bg-pink-600 text-white z-20 rounded-tl-full right-0 py-2 px-2 lg:py-3 lg:px-4  text-xs text-center",
            {
              "bg-orange-500": isHotSeller,
            }
          )}
        >
          {isHotSeller ? "Hot Seller" : "live Auctoin"}
        </div>
      </div>
      <div className="min-h-28 col-span-4 lg:col-span-5 flex flex-col gap-3 text-lg">
        <div className="flex items-center justify-between gap-4">
          <h3 className="capitalize font-normal text-base line-clamp-2 lg:line-clamp-1">
            Jeep Car, new, used for only one time
          </h3>
          <Heart
            className={"cursor-pointer hidden lg:block"}
            fill={isFav ? "red" : "transparent"}
            color={isFav ? "red" : "black"}
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm lg:text-base">
            Starting price
          </span>
          <span className="font-medium text-base lg:text-2xl">1000 EGP</span>
        </div>
        <div className="flex items-center flex-wrap lg:flex-nowrap gap-3">
          <span className="capitalize text-gray-400 text-sm lg:text-base">
            lot starts in
          </span>
          <div className="w-full lg:w-auto flex items-center gap-2 lg:gap-3">
            <div className="bg-orange-100 text-orange-400 px-2 py-1 rounded-xl lg:rounded-3xl font-medium text-xs flex flex-1 lg:text-sm capitalize flex-col lg:flex-row  lg:items-center">
              <span className="text-base lg:text-xl mx-0.5">10</span> days
            </div>
            <div className="bg-orange-100 text-orange-400 px-2 py-1 rounded-xl lg:rounded-3xl font-medium text-xs flex flex-1 lg:text-sm capitalize flex-col lg:flex-row  lg:items-center">
              <span className="text-base lg:text-xl mx-0.5">10</span> hours
            </div>
            <div className="bg-orange-100 text-orange-400 px-2 py-1 rounded-xl lg:rounded-3xl font-medium text-xs flex flex-1 lg:text-sm capitalize flex-col lg:flex-row  lg:items-center">
              <span className="text-base lg:text-xl mx-0.5">10</span> minutes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
