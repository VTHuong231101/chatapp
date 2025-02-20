import dotenv from "dotenv";
import express from "express";

import connectToMongoDB from "./database/connectToMongoDB";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
const port = process.env.PORT as string || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is running on port ${port}`);
})