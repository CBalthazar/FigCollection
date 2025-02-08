import ArmyService from "../services/army.service.js";
import BaseController from "./base.controller.js";

class ArmyController extends BaseController {
  constructor() {
    super(ArmyService);
  }

  isBodyValid(body) {
    return body.id && body.name && body.max_cost && id_user && id_game && users;
  }
}

export default ArmyController;
