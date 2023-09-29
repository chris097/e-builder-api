const express = require("express");
const { getAllInfo } = require("../controller/allInfo");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/information', authenticateToken, getAllInfo);

module.exports = router;