import Image from "next/image";
import { getStrapiMedia } from "@/app/_lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

export const StrapiImage = ({
  src,
  alt,
  height,
  width,
  className,
}: Readonly<StrapiImageProps>) => {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl ?? imageFallback}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  );
}