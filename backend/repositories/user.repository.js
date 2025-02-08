import { PrismaClient } from "@prisma/client";
import BaseRepository from "./base.repository.js";

class UserRepository extends BaseRepository {
  constructor() {
    super(new PrismaClient().users);
  }
}

export default UserRepository;
