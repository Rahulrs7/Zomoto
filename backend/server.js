const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const vendorRoutes = require("./routes/vendorRoutes");
const bodyParser = require("body-parser");
const firmRoutes = require("./routes/firmRoutes");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/userRoute");  // ✅ Fixed import
const { connectDB } = require("./config/db.js");

const app = express();
const PORT = process.env.PORT || 4000;

dotEnv.config();
app.use(cors());

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use("/vendor", vendorRoutes);
app.use("/firm", firmRoutes);
app.use("/product", productRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/user", userRouter);  // ✅ Fixed API route

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
