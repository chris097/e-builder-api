const express = require("express");
const { registerUser, loginUser, getUsers, forgotPassword } = require("../controller/auth");
const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.post('/auth/forgot-password', forgotPassword);
router.get('/auth/users', getUsers);

module.exports = router;