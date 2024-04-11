import Image from "next/image"

type ImageResponsiveProps = {
  src: string
  alt: string
}

export default function ImageResponsive({ src, alt }: ImageResponsiveProps) {
  return (
    <div className="relative w-[200px] h-full">
      <Image src={src} alt={alt} className="z-10 object-cover" fill />
    </div>
  )
}
