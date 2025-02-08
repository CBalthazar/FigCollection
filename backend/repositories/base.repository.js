class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  getById(id) {
    return this.model.findUnique({ where: { id: id } });
  }

  create(body) {
    body.id = Math.ceil(Math.random() * 10000);
    return this.model.create({ data: body });
  }

  modify(id, body) {
    return this.model.update({
      where: { id: id },
      data: body,
    });
  }

  delete(id) {
    return this.model.delete({
      where: { id: id },
    });
  }
}

export default BaseRepository;
