import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Näytä kaikki",
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  centered?: boolean;
}) {
  return <div className={`flex items-end justify-between gap-6 ${centered ? "justify-center text-center" : ""}`}>
    <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-sm leading-6 text-black/55 md:text-base">{description}</p>}
    </div>
    {href && !centered && <Link href={href} className="hidden shrink-0 items-center gap-2 text-sm font-bold sm:flex">{linkLabel}<ArrowRight className="size-4"/></Link>}
  </div>;
}
