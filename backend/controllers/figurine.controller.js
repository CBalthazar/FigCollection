import BaseController from "./base.controller";
import FigurineService from "../services/figurine.service";

class FigurineController extends BaseController {
  constructor() {
    super(FigurineService);
  }

  isBodyValid(body) {
    return (
      body.id &&
      body.name &&
      body.hp &&
      body.damage &&
      body.army_cost &&
      body.id_user &&
      body.id_game &&
      body.id_squad
    );
  }
}

export default FigurineController;
