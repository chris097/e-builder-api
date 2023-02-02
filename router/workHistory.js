const express = require("express");
const { getWorkHistory, createWorkHistory } = require("../controller/workHistory");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/work-history', authenticateToken, getWorkHistory);
router.post('/user/work-history', authenticateToken, createWorkHistory)

module.exports = router;