class BaseController {
  constructor(Service) {
    this.service = new Service();
  }

  async getById(req, res) {
    const id = parseInt(req.params.id);
    try {
      let base = await this.service.getById(id);
      res.status(200).json(base);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async create(req, res) {
    if (!req.body || !this.isBodyValid(req.body)) {
      res.status(400).json({ message: "request body is invalid or missing" });
    }
    try {
      let newEntity = await this.service.create(req.body);
      res.status(201).json(newEntity);
    } catch (err) {
      console.log("error in base controller :\n" + err);
      res.status(500).json({ message: "server crash, check console" });
    }
  }

  isBodyValid(body) {
    return true;
  }

  async modify(req, res) {
    const id = parseInt(req.params.id);

    if (!req.body || !this.isBodyValid(req.body)) {
      res.status(400).json({ message: "body is missing some values" });
    }
    try {
      let modified = await this.service.modify(id, req.body);
      res.status(200).json({ message: "modified correctly", base: modified });
    } catch (err) {
      console.log("error in base controller :\n" + err);
      res.status(500).json({ message: "server crash, check console" });
    }
  }

  async delete(req, res) {
    const id = parseInt(req.params.id);
    try {
      let deleted = await this.service.delete(id);
      console.log(deleted);
      if (deleted) {
        res.status(200).json({ message: "deletion complete" });
      } else {
        res.status(417).json({
          message: "not deleted for no other reason than my bitchiness ;)",
        });
      }
    } catch (err) {
      console.log("error in base controller :\n" + err);
    }
  }
}

export default BaseController;
