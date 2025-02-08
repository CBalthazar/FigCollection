import SquadRepository from "../repositories/squad.repository";
import BaseService from "./base.service.js";

class SquadService extends BaseService {
  constructor() {
    super(SquadRepository);
  }
}

export default SquadService;
