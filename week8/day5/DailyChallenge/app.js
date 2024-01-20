import express from "express";
import { users_router } from "./routes/users.routes.js";
import path from "path";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const currentFilePath = new URL(import.meta.url).pathname;
const currentDir = path.dirname(currentFilePath);

app.use("/", express.static(path.join(currentDir, "public")));

app.use("/users", users_router);

app.listen(3001, () => {
    console.log("run on port 3001");
  });
