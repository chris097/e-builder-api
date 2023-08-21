const express = require("express");
const { createUserInfo, getUserInfo, updateUserInfo } = require("../controller/userInfo");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/info', authenticateToken, getUserInfo)
router.post('/user/info', authenticateToken, createUserInfo);
router.patch('/user/info/:id', authenticateToken, updateUserInfo);

module.exports = router;