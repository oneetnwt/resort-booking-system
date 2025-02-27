import express from "express";

import { bookControler } from "../controllers/book.controller.js";

const router = express.Router();

router.get('/book', bookControler)

export default router