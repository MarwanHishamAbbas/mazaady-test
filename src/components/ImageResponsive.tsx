import Image from "next/image";

type ImageResponsiveProps = {
  src: string;
  alt: string;
};

export default function ImageResponsive({ src, alt }: ImageResponsiveProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        sizes="500px"
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-10"
      />
    </div>
  );
}
