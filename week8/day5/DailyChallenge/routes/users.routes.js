import express from "express"

import {
  createUser,
  login,
  getAllUsers,
  getUserById,
  upDateUser,
  
} from "../controllers/users.controller.js"

const users_router = express.Router();

users_router.post("/register", createUser)
users_router.post("/login", login)

users_router.get("/", getAllUsers)
users_router.get("/:id", getUserById)
users_router.put("/:id", upDateUser)


export { users_router };
