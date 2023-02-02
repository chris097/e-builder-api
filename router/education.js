const express = require("express");
const { getEducation, createEducation } = require("../controller/education");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/education', authenticateToken, getEducation);
router.post('/user/education', authenticateToken, createEducation);

module.exports = router;