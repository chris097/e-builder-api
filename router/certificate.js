const express = require("express");
const { getCertificate, createCertificate, updateCertificate } = require("../controller/certificate");
const { authenticateToken } = require("../middleware/route");
const router = express.Router();

router.get('/user/certificate', authenticateToken, getCertificate);
router.post('/user/certificate', authenticateToken, createCertificate);
router.patch('/user/certificate/:id', authenticateToken, updateCertificate);

module.exports = router;