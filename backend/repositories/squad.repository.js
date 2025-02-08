import { PrismaClient } from "@prisma/client";
import BaseRepository from "./base.repository";

class SquadRepository extends BaseRepository {
  constructor() {
    super(new PrismaClient());
  }
}

export default SquadRepository;
