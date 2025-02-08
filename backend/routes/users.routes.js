import express from "express";
import usersController from "../controllers/users.controller.js";

const router = express.Router();
const controller = new usersController();

router.post("/", (req, res) => controller.createUser(req, res));

// # MiddleWare to check id
router.use("/:id", (req, res, next) => {
  if (!req.params?.id || isNaN(req.params.id)) {
    res.status(400).json({ message: "error: missing valid id in URL" });
  }
  next();
});

router.get("/:id", (req, res) => {
  controller.getUser(req, res);
});

router.put("/:id", (req, res) => controller.modifyUser(req, res));

router.delete("/:id", (req, res) => controller.deleteUser(req, res));

router.use((err, req, res, next) => {
  console.error(
    "uwaaa, big problems here because THAT, my dear, is a totally unexpected Error caught from who knows where"
  );
  console.log("in case you'd need it, here is the err :\n" + err);
});

export default router;
