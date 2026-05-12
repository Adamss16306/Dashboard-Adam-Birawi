require("dotenv").config();

const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./docs/swagger");

const dashboardRoutes = require("./routes/dashboardRoutes");
const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/auth", authRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", function (req, res) {
    res.send("Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
});