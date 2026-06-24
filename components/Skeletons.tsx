export function CardSkeleton() {
  return <div className="overflow-hidden rounded-[26px] border border-black/7 bg-white"><div className="skeleton h-48"/><div className="p-5"><div className="skeleton h-5 w-24 rounded-full"/><div className="skeleton mt-5 h-6 w-2/3 rounded-lg"/><div className="skeleton mt-3 h-4 w-1/2 rounded-lg"/><div className="skeleton mt-5 h-16 rounded-xl"/><div className="mt-5 grid grid-cols-2 gap-2"><div className="skeleton h-10 rounded-xl"/><div className="skeleton h-10 rounded-xl"/></div></div></div>;
}

export function SearchPageSkeleton() {
  return <><div className="bg-[#f8f7f3] py-14"><div className="container-page"><div className="skeleton h-3 w-24 rounded-full"/><div className="skeleton mt-5 h-12 max-w-lg rounded-xl"/><div className="skeleton mt-4 h-4 max-w-md rounded-lg"/></div></div><div className="container-page grid gap-8 py-10 lg:grid-cols-[250px_1fr]"><div className="skeleton hidden h-[520px] rounded-[22px] lg:block"/><div><div className="skeleton mb-6 h-10 w-52 rounded-xl"/><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{Array.from({length:6}).map((_, index) => <CardSkeleton key={index}/>)}</div></div></div></>;
}

export function ProfilePageSkeleton() {
  return <><div className="bg-[#f8f7f3] py-10"><div className="container-page grid grid-cols-2 gap-2 md:grid-cols-4"><div className="skeleton col-span-2 h-72 rounded-[28px] md:h-[430px]"/><div className="skeleton h-36 rounded-[24px] md:h-auto"/><div className="skeleton h-36 rounded-[24px] md:h-auto"/></div></div><div className="container-page grid gap-10 py-10 lg:grid-cols-[1fr_350px]"><div><div className="skeleton h-8 w-36 rounded-full"/><div className="skeleton mt-5 h-14 max-w-lg rounded-xl"/><div className="skeleton mt-6 h-24 max-w-2xl rounded-xl"/><div className="skeleton mt-10 h-72 rounded-[24px]"/></div><div className="skeleton h-96 rounded-[28px]"/></div></>;
}
