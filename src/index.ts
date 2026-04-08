import 'dotenv/config';
import express from 'express';
import schoolApi from './modules/school-api/api.route.js';

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use("/api/", schoolApi)

app.get("/health", (req, res) => {
    res.json({ message: "OK" });
});

app.listen(PORT, () => {
    console.log("Server started on port 3000");
});
