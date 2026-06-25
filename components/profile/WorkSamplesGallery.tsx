import { Images } from "lucide-react";
import type { WorkSample } from "@/data/professionals";
import { getGalleryWorkSamples } from "@/lib/work-samples";

export function WorkSamplesGallery({ samples }: { samples: WorkSample[] }) {
  const visibleSamples = getGalleryWorkSamples(samples);

  if (visibleSamples.length === 0) return null;
  const isTwoImageGallery = visibleSamples.length === 2;

  return (
    <div className="rounded-[26px] border border-black/8 bg-white p-3 shadow-sm shadow-black/5">
      <div className={isTwoImageGallery ? "grid gap-3 sm:grid-cols-2" : "grid grid-cols-2 gap-3 lg:grid-cols-3"}>
        {visibleSamples.map((sample, index) => {
          const featured = index === 0 && !isTwoImageGallery;
          return (
            <figure
              key={`${sample.src}-${index}`}
              className={`group relative overflow-hidden rounded-[22px] bg-[#f5f3ef] shadow-inner ${
                isTwoImageGallery
                  ? "aspect-[4/5] sm:aspect-[5/4]"
                  : featured
                    ? "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto lg:min-h-[420px]"
                    : "aspect-square"
              }`}
            >
              <img
                src={sample.src}
                alt={sample.alt}
                loading={index < 2 ? "eager" : "lazy"}
                className="absolute inset-0 size-full object-cover transition duration-500 group-hover:scale-[1.035]"
              />
              <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-4 pb-4 pt-14 text-white ${
                featured
                  ? "sm:px-5 sm:pb-5"
                  : ""
              }`}
              >
                <figcaption className="text-xs font-bold leading-5 sm:text-sm">
                  {sample.alt}
                </figcaption>
              </div>
            </figure>
          );
        })}
      </div>
      <p className="mt-4 flex items-center gap-2 text-xs text-black/40">
        <Images className="size-4 text-[#6d4aff]" />
        {visibleSamples.length} työnäytettä · kuvia voi näyttää profiilissa 2–6
      </p>
    </div>
  );
}
