const express = require("express");
const { getEducation, createEducation, updateEducation } = require("../controller/education");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/education', authenticateToken, getEducation);
router.post('/user/education', authenticateToken, createEducation);
router.patch('/user/education/:id', authenticateToken, updateEducation);

module.exports = router;