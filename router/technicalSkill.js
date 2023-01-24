const express = require("express");
const { getSkills, createSkills } = require("../controller/technicalSkill");
const router = express.Router();

router.get('/user/skill', getSkills);
router.post('/user/skill', createSkills);

module.exports = router;