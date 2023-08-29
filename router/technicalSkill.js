const express = require("express");
const { getSkills, createSkills, updateSkills } = require("../controller/technicalSkill");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/skill', authenticateToken, getSkills);
router.post('/user/skill', authenticateToken, createSkills);
router.patch('/user/skill/:id', authenticateToken, updateSkills);

module.exports = router;