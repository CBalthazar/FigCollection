class BaseService {
  constructor(Repository) {
    this.repository = new Repository();
  }

  getById(id) {
    return this.repository.getById(id);
  }

  create(body) {
    return this.repository.create(body);
  }

  modify(id, body) {
    return this.repository.modify(id, body);
  }

  delete(id) {
    return this.repository.delete(id);
  }
}

export default BaseService;
