import { Images } from "lucide-react";
import { WorkVisual } from "@/components/ProfessionalCard";

export function ProfileGallery({name, images}:{name:string; images:string[]}) {
  return <div className="relative grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2">
    <WorkVisual tone={images[0]} name={name} className="col-span-2 row-span-2 h-72 rounded-l-[28px] md:h-[430px]"/>
    <WorkVisual tone={images[1]} name={name} className="h-36 rounded-tr-[24px] md:h-auto"/>
    <WorkVisual tone={images[2]} name={name} className="h-36 rounded-br-[24px] md:h-auto"/>
    <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold shadow-lg backdrop-blur"><Images className="size-4"/>3 demokuvaa</span>
  </div>;
}
