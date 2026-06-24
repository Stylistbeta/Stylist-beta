import { professionals } from "@/data/professionals";
import type { ProfessionalsRepository } from "./professionals-repository";

export class DemoProfessionalsRepository implements ProfessionalsRepository {
  async list() {
    return professionals;
  }

  async findById(id: string) {
    return professionals.find((professional) => professional.id === id) ?? null;
  }
}
