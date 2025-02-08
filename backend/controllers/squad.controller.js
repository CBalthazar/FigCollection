import SquadService from "../services/squad.service";
import BaseController from "./base.controller.js";

class SquadController extends BaseController {
  constructor() {
    super(SquadService);
  }

  isBodyValid(body) {
    return body.id && body.name && army_cost;
  }
}

export default SquadController;
