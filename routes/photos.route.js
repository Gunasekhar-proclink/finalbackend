import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Photos } from "../entities/photos.entity.js";
// import { authIsAdmin } from "../middleware/isadmin.middleware.js";
// import { auth } from "../middleware/auth.middleware.js";
import {
  getAllPhotosCtr,
  getPhotobyIdCtr,
  deletePhotoCtr,
  createPhotoCtr,
  updatePhotoCtr,
} from "../controllers/photos.controller.js";

const router = express.Router();



router.get("/", getAllPhotosCtr);

router.get("/:id", getPhotobyIdCtr);

router.delete("/:id" , deletePhotoCtr);

router.post("/", createPhotoCtr);

router.put("/:id", updatePhotoCtr);

export default router;
