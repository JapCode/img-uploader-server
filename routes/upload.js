const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = require("../services/firebaseService");
const uploadFile = require("../controllers/uploadFile");
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });

router.post("/", upload.single("pic"), async (req, res, next) => {
  try {
    const file = req.file;
    const uploadFunction = await uploadFile(file);
    console.log(uploadFunction);
    res.status(201).json({ publicUrl: uploadFunction });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
