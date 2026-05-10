import lavadora from "@/assets/lavadora.jpg";
import lavavajillas from "@/assets/lavavajillas.jpg";
import frigorifico from "@/assets/frigorifico.jpg";
import horno from "@/assets/horno.jpg";
import cocina from "@/assets/cocina.jpg";
import termo from "@/assets/termo.jpg";

const map: Record<string, string> = { lavadora, lavavajillas, frigorifico, horno, cocina, termo };

export function ServiceImage({ name, alt, className }: { name: string; alt: string; className?: string }) {
  return <img src={map[name]} alt={alt} loading="lazy" className={className} />;
}
