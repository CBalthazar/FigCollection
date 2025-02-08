import BaseController from "./base.controller";
import GameService from "../services/games.service";

class GameController extends BaseController {
  constructor() {
    super(GameService);
  }

  isBodyValid(body) {
    return body.id && body.name && body.description && id_user;
  }
}
