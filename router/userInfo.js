const express = require("express");
const { createUserInfo, getUserInfo } = require("../controller/userInfo");
const router = express.Router();

router.get('/user/info', getUserInfo)
router.post('/user/info', createUserInfo);

module.exports = router;