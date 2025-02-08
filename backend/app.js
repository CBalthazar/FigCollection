import express from "express";
import usersRouter from "./routes/users.routes.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.info("server up on http://localhost:" + PORT);
});
