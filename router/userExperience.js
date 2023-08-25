const express = require("express");
const { authenticateToken } = require("../middleware/route");
const { getUserExperience, createUserExperience, updateUserExperience } = require("../controller/userExperience");
const router = express.Router();

router.get('/user/user-experience', authenticateToken, getUserExperience);
router.post('/user/user-experience', authenticateToken, createUserExperience)
router.patch('/user/user-experience/:id', authenticateToken, updateUserExperience)

module.exports = router;