import { PrismaClient } from "@prisma/client";

class UsersRepository {
  constructor() {
    this.prisma = new PrismaClient();
  }

  getUser(id) {
    return this.prisma.users.findUnique({ where: { id: id } });
  }

  createUser(body) {
    body.id = Math.ceil(Math.random() * 10000);
    return this.prisma.users.create({ data: body });
  }

  modifyUser(id, body) {
    return this.prisma.users.update({
      where: { id: id },
      data: body,
    });
  }

  deleteUser(id) {
    return this.prisma.users.delete({
      where: { id: id },
    });
  }
}

export default UsersRepository;
