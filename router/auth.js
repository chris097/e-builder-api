const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getUsers, forgotPassword, resetPassword, loginUserWithToken } = require("../controller/auth");
const { authenticateToken } = require("../middleware/route");

router.post('/auth/register', registerUser);
router.post('/auth/login/:id/:token', loginUserWithToken);
router.post('/auth/login', loginUser);
router.post('/auth/forgot-password', forgotPassword);
router.post('/auth/reset-password/:id/:token', resetPassword);
router.get('/auth/users', getUsers);

module.exports = router;