import GameReprository from "../repositories/games.repository";
import BaseService from "./base.service";

class GameService extends BaseService {
  constructor() {
    super(GameReprository);
  }
}

export default GameService;
