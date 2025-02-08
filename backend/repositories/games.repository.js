import { PrismaClient } from "@prisma/client";
import BaseRepository from "./base.repository";

class GameReprository extends BaseRepository {
  constructor() {
    super(new PrismaClient().games);
  }
}

export default GameReprository;
