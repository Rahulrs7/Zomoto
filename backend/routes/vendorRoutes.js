const vendorController = require('../controllers/vendorController'); // ✅ Correct import
const express = require('express');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/register', vendorController.vendorRegister);
router.post('/login', vendorController.vendorLogin);
router.get('/all-vendors', verifyToken, vendorController.getAllVendors);
router.get('/single-vendor/:vendorId', vendorController.getVendorById);

module.exports = router;
