const express = require("express");
const { registerUser, loginUser, getUsers } = require("../controller/auth");
const router = express.Router();

router.post('/auth/register', registerUser);
router.post('/auth/login', loginUser);
router.get('/auth/users', getUsers);

module.exports = router;