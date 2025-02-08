import UsersRepository from "../repositories/users.repository.js";

class UsersService {
  constructor() {
    this.repository = new UsersRepository();
  }

  getUser(id) {
    return this.repository.getUser(id);
  }

  createUser(body) {
    return this.repository.createUser(body);
  }

  modifyUser(id, body) {
    return this.repository.modifyUser(id, body);
  }

  deleteUser(id) {
    return this.repository.deleteUser(id);
  }
}

export default UsersService;
