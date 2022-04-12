import express from "express";
import { getUsers, getUser, formCreateUser, createUser, deleteUser, updateUser} from "../api/controllers/controllers.js";

const router = express.Router();

//all routes in here are starting with /users
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/user_created', formCreateUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;

