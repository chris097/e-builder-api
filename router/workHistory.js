const express = require("express");
const { getWorkHistory, createWorkHistory } = require("../controller/workHistory");
const router = express.Router();

router.get('/user/work-history', getWorkHistory);
router.post('/user/work-history', createWorkHistory)

module.exports = router;