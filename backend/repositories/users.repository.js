import { PrismaClient } from "@prisma/client";

class UsersRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUser(id) {
    try {
      return await this.prisma.users.findUnique({ where: { id: id } });
    } catch (err) {
      console.error("error in repository getUser :\n" + err);
    }
  }

  async createUser(body) {
    try {
      body.id = Math.ceil(Math.random() * 10000);
      return await this.prisma.users.create(body);
    } catch (err) {
      console.error("error while creating user :\n" + err);
    }
  }
}

export default UsersRepository;
