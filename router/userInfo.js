const express = require("express");
const router = express.Router();
const { createUserInfo, getUserInfo, updateUserInfo } = require("../controller/userInfo");
const { authenticateToken } = require("../middleware/route");

router.get('/user/info', authenticateToken, getUserInfo)
router.post('/user/info', authenticateToken, createUserInfo);
router.patch('/user/info/:id', authenticateToken, updateUserInfo);

module.exports = router;