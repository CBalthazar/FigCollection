import express from "express";
import userRoutes from "./routes/user.routes.js";
import armyRoutes from "./routes/army.routes.js";
const app = express();
const PORT = 3000;

app.use(express.json());

// # MiddleWare to check id
app.use("/*/:id", (req, res, next) => {
  if (!req.params?.id || isNaN(req.params.id)) {
    res.status(400).json({ message: "error: missing valid id in URL" });
  }
  next();
});

app.use("/users", userRoutes);
app.use("/armies", armyRoutes);

app.use((err, req, res, next) => {
  console.error("completely unexpected issue : \n" + err);
  res.status(500).json({ message: "server got messed up big time" });
});

app.listen(PORT, () => {
  console.info("server up on http://localhost:" + PORT);
});
