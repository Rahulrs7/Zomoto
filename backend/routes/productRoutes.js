const express = require('express');
const path = require('path'); // Added missing import
const productController = require("../controllers/productController");
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/add-product/:firmId', verifyToken, productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    res.header('Content-Type', 'image/jpeg');
    res.sendFile(path.join(__dirname, '..', 'uploads', imageName));
});

router.delete('/:productId', verifyToken, productController.deleteProductById); // Added protection

module.exports = router;
