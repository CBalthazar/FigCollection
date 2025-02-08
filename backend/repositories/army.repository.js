import { PrismaClient } from "@prisma/client";
import BaseRepository from "./base.repository.js";

class ArmyRepository extends BaseRepository {
  constructor() {
    super(new PrismaClient().armies);
  }
}

export default ArmyRepository;
