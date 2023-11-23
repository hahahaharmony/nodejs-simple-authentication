import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import * as configs from "./configs";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/:name?", (req, res) => {
    return res.send({
        message: `Hello there, ${req.params.name || "Guest"}!`,
    });
});

app.listen(configs.serverPort, () => {
    console.log(`Server listening on port ${configs.serverPort}`);
});
