import express from "express";
import {
    GetUsers,
    GetUserById,
    CreateUser,
    UpdateUser,
    DeleteUser,
} from "../controllers/Users.js"

const router = express.Router();

router.get('/users', GetUsers);
router.get('/users/:id', GetUserById);
router.post('/users', CreateUser);
router.patch('/users/:id', UpdateUser);
router.delete('/users/:id', DeleteUser);

export default router;