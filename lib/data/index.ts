import { DemoProfessionalsRepository } from "./demo-professionals-repository";
import type { ProfessionalsRepository } from "./professionals-repository";

/**
 * Single composition point for the active data source.
 * Later: instantiate SupabaseProfessionalsRepository here.
 */
export const professionalsRepository: ProfessionalsRepository = new DemoProfessionalsRepository();

export type { ProfessionalsRepository } from "./professionals-repository";
