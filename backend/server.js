const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "CareerPath AI Backend is running!"
    });
});

app.get("/api/test", (req, res) => {
    res.json({
        success: true,
        message: "API is working!"
    });
});
app.post("/api/assessment", (req, res) => {
    const assessment = req.body;

    console.log("Assessment received:");
    console.log(assessment);

    res.json({
        success: true,
        message: "Assessment received successfully",
        data: assessment
    });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});