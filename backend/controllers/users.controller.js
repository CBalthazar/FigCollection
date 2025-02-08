import UsersService from "../services/users.service.js";

class UsersController {
  constructor() {
    this.service = new UsersService();
  }

  async getUser(req, res) {
    const id = parseInt(req.params.id);
    try {
      let user = await this.service.getUser(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async createUser(req, res) {
    if (!(req.body?.nickname && req.body.password)) {
      res.status(400).json({ message: "body is missing some values" });
    }
    try {
      let newUser = await this.service.createUser(req.body);
      res.status(201).json(newUser);
    } catch (err) {
      console.log("error in user controller :\n" + err);
      res.status(500).json({ message: "server crash, check console" });
    }
  }

  async modifyUser(req, res) {
    const id = parseInt(req.params.id);
    if (!(req.body?.nickname && req.body.password)) {
      res.status(400).json({ message: "body is missing some values" });
    }
    try {
      let modifiedUser = await this.service.modifyUser(id, req.body);
      res.status(200).json({ message: "user modified", user: modifiedUser });
    } catch (err) {
      console.log("error in user controller :\n" + err);
      res.status(500).json({ message: "server crash, check console" });
    }
  }

  async deleteUser(req, res) {
    const id = parseInt(req.params.id);
    try {
      let deletedUser = await this.service.deleteUser(id);
      console.log(deletedUser);
      if (deletedUser) {
        res.status(200).json({ message: "user deleted" });
      } else {
        res.status(417).json({
          message: "not deleted for no other reason than my bitchiness ;)",
        });
      }
    } catch (err) {
      console.log("error in user controller :\n" + err);
    }
  }
}

export default UsersController;
