import { CloudDownload, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import { ReactNode } from "react"

function QRCodeWrapper({ children }: { children: ReactNode }) {
  return <div className="w-full bg-white rounded-2xl px-6 py-3">{children}</div>
}

function QRCodeHeader() {
  return (
    <div className="flex gap-x-2 p-4 items-center bg-orange-100 rounded-2xl my-4">
      <CloudDownload />
      <p className="text-xs">
        download the QR code or share it with your friends.
      </p>
    </div>
  )
}

function QRCodeSource() {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-pink-600 to-orange-400 p-6">
      <div className="bg-white rounded-2xl p-4 gap-2 flex items-center justify-center flex-col">
        <Image
          src="https://mazaady.com/images/mazaady-logo.svg"
          alt="mazaady"
          loading="lazy"
          width={140}
          height={60}
        />
        <h2 className="font-medium text-2xl">Hala Ahmed</h2>
        <Image
          src="/qr-code.png"
          alt="qr code - Hala Ahme"
          width={120}
          height={160}
        />
        <p className="text-sm">Follow Us on Mazaady</p>
      </div>
    </div>
  )
}

function QRCodeBar() {
  return (
    <div className="flex justify-between items-center">
      <h2 className="font-medium text-base lg:text-2xl">QR Code</h2>
      <div className="flex items-center gap-6">
        <Eye className="cursor-pointer" />
        <Share2 className="cursor-pointer" />
        <CloudDownload className="cursor-pointer" />
      </div>
    </div>
  )
}

export const QRCodeCard = {
  root: QRCodeWrapper,
  bar: QRCodeBar,
  header: QRCodeHeader,
  source: QRCodeSource,
}
