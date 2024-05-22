import cors from "cors";
import morgan from "morgan";
import express from "express";


const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

const port = 4001;
app.listen(port, () => {
    console.log("App started and listening on port: " + port);
});

app.get("/", (req, res) => {
    res.json({
        message: "Hello World From ExpressJS and TypeScript!",
    });
});