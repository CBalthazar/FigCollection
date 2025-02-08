import BaseService from "./base.service";
import FigurineRepository from "../repositories/figurine.repository";

class FigurineService extends BaseService {
  constructor() {
    super(FigurineRepository);
  }
}

export default FigurineService;
