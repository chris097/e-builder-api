const express = require("express");
const { getCertificate, createCertificate } = require("../controller/certificate");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/certificate', authenticateToken, getCertificate);
router.post('/user/certificate', authenticateToken, createCertificate);

module.exports = router;