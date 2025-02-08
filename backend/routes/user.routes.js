import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();
const controller = new userController();

router.post("/", (req, res) => controller.create(req, res));

router.get("/:id", (req, res) => controller.getById(req, res));

router.put("/:id", (req, res) => controller.modify(req, res));

router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
