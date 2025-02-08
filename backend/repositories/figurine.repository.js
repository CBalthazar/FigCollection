import BaseRepository from "./base.repository";
import { PrismaClient } from "@prisma/client";

class FigurineRepository extends BaseRepository {
  constructor() {
    super(new PrismaClient().figurines);
  }
}

export default FigurineRepository;
