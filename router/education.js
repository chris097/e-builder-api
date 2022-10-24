const express = require("express");
const { getEducation, createEducation } = require("../controller/education");
const router = express.Router();

router.get('/user/education', getEducation);
router.post('/user/education', createEducation);

module.exports = router;