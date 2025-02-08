import ArmyRepository from "../repositories/army.repository.js";
import BaseService from "./base.service.js";

class ArmyService extends BaseService {
  constructor() {
    super(ArmyRepository);
  }
}

export default ArmyService;
