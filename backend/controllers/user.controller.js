import UserService from "../services/user.service.js";
import BaseController from "./base.controller.js";

class UserController extends BaseController {
  constructor() {
    super(UserService);
  }

  isBodyValid(body) {
    return body.nickname && body.password;
  }
}

export default UserController;
