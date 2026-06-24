import { Suspense } from "react";
import { SearchClient } from "./search-client";
import { SearchPageSkeleton } from "@/components/Skeletons";
import { professionalsRepository } from "@/lib/data";

export default async function SearchPage() {
  const professionals = await professionalsRepository.list();
  return <Suspense fallback={<SearchPageSkeleton/>}><SearchClient professionals={professionals}/></Suspense>;
}
