const express = require("express");
const { getAllInfo, getPercentage } = require("../controller/allInfo");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/information', authenticateToken, getAllInfo);
router.get('/user/percentage', authenticateToken, getPercentage);

module.exports = router;