import type { Professional } from "@/data/professionals";

/**
 * Application-facing data contract. A Supabase implementation can replace the
 * demo implementation without changing pages or UI components.
 */
export interface ProfessionalsRepository {
  list(): Promise<Professional[]>;
  findById(id: string): Promise<Professional | null>;
}
