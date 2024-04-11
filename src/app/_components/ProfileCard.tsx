import ImageResponsive from "@/components/ImageResponsive"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card"
import { Star, UserRoundCheck, UsersRound } from "lucide-react"
import { ReactNode } from "react"

function profileCardWrapper({ children }: { children: ReactNode }) {
  return <Card className="border-0 shadow-none">{children}</Card>
}

function profileCardContent() {
  return (
    <CardContent className="flex flex-col p-6 gap-4">
      <div className=" w-24 h-24 rounded-2xl overflow-hidden">
        <ImageResponsive src="/user.png" alt="Sara Ahmed" />
      </div>

      <CardTitle className="font-medium">Hala Ahmed</CardTitle>
      <CardDescription className="text-gray-600 font-normal">
        I am Hala Ahmed, I am the owner of the local brand called Beauty which
        is for Mackeup and Skin Care.
      </CardDescription>
      <div className="flex flex-nowrap justify-between gap-4">
        <div className="bg-orange-100 flex flex-nowrap items-center gap-2 rounded-2xl px-1.5 py-2 lg:px-2 lg:py-3 flex-1 text-xs font-normal">
          <UserRoundCheck className="text-orange-400" />
          <div>
            <span className="block">5</span>
            <span className="text-orange-400">following</span>
          </div>
        </div>
        <div className="bg-orange-100 flex flex-nowrap items-center gap-2 rounded-2xl px-1.5 py-2 lg:px-2 lg:py-3 flex-1 text-xs font-normal">
          <UsersRound className="text-orange-400" />
          <div>
            <span className="block">20</span>
            <span className="text-orange-400">followers</span>
          </div>
        </div>
        <div className="bg-orange-100 flex flex-nowrap items-center gap-2 rounded-2xl px-1.5 py-2 lg:px-2 lg:py-3 flex-1 text-xs font-normal">
          <Star className="text-orange-400" />
          <div>
            <span className="block">
              4.2{" "}
              <small className="text-xs text-gray-600 lowercase">(15)</small>
            </span>
            <span className="text-orange-400">following</span>
          </div>
        </div>
      </div>
    </CardContent>
  )
}

function ProfileCardFooter() {
  return (
    <CardFooter>
      <Button
        variant="default"
        className="bg-gradient-to-r from-pink-600 to-orange-400 flex-1 py-6 text-lg"
        type="button"
      >
        Follow
      </Button>
    </CardFooter>
  )
}

export const ProfileCard = {
  container: profileCardWrapper,
  content: profileCardContent,
  footer: ProfileCardFooter,
}
