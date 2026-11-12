import { ImagePlus } from "lucide-react";
import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  sizes: string;
  label: string;
  className?: string;
  priority?: boolean;
};

export function EditableImage({ src, alt, sizes, label, className = "", priority = false }: Props) {
  if (src) {
    return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={className} />;
  }

  return (
    <div className={`image-placeholder ${className}`} role="img" aria-label={`${alt}. ${label} will be added.`}>
      <span className="placeholder-orbit" aria-hidden="true" />
      <div><ImagePlus size={22} strokeWidth={1.2} /><span>{label}</span><small>Photography to be added</small></div>
    </div>
  );
}
