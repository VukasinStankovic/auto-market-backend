import cors from "cors";
import morgan from "morgan";
import express from "express";
import {configDotenv} from "dotenv";
import {AppDataSource} from "./db";


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

configDotenv();
AppDataSource.initialize().then(() => {
    console.log("Connected to database");
    const port = process.env.SERVER_PORT;
    app.listen(port, () => {
        console.log("App started and listening on port: " + port);
    });
}).catch((e) => {
    console.log(e);
});

app.get("/", (req, res) => {
    res.json({
        message: "Hello World From ExpressJS and TypeScript!",
    });
});

app.get("*", (req, res) => {
    res.status(404).json({
        message: "Not Found!",
    });
});