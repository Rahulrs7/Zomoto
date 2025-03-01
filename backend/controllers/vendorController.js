// const Vendor = require('../models/Vendor');

const vendorController = require('../controllers/vendorController'); // ✅ Correct import

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotEnv = require('dotenv');

dotEnv.config();

const secretKey = process.env.JWT_SECRET;

const vendorRegister = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const vendorEmail = await Vendor.findOne({ email });
        if (vendorEmail) {
            return res.status(400).json({ success: false, message: "Email already taken" });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newVendor = new Vendor({
            username,
            email,
            password: hashedPassword,
        });

        await newVendor.save();

        res.status(201).json({ success: true, message: "Vendor registered successfully" });
        console.log("Vendor registered");

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error", details: error.message });
    }
};

const vendorLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const vendor = await Vendor.findOne({ email });
        if (!vendor) {
            return res.status(404).json({ success: false, message: "Vendor not found" });
        }

        const isMatch = await bcrypt.compare(password, vendor.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        const token = jwt.sign({ vendorId: vendor._id }, secretKey, { expiresIn: "7d" });

        res.status(200).json({ success: true, token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error", details: error.message });
    }
};
const getAllVendors = async (req, res) => {
    try {
        const vendors = await Vendor.find();
        res.status(200).json({ success: true, vendors });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", details: error.message });
    }
};

const getVendorById = async (req, res) => {
    try {
        const vendor = await Vendor.findById(req.params.vendorId);
        if (!vendor) {
            return res.status(404).json({ success: false, message: "Vendor not found" });
        }
        res.status(200).json({ success: true, vendor });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error", details: error.message });
    }
};

module.exports = { vendorRegister, vendorLogin, getAllVendors, getVendorById };

// module.exports = { vendorRegister, vendorLogin };
