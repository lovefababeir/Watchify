const express = require("express");
const app = express();
const cors = require("cors");
const videoRouter = require("./routes/videoRoutes");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use("/videos", videoRouter);

app.listen(PORT, () => console.log("Brainflix Server Listening"));
