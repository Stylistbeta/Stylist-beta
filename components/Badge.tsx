import { ProType,typeLabel } from '@/data/professionals';
export function TypeBadge({type}:{type:ProType}){const c={business:'bg-emerald-50 text-emerald-700',student:'bg-blue-50 text-blue-700',hobbyist:'bg-amber-50 text-amber-800'}[type];return <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${c}`}>{typeLabel[type]}</span>}
