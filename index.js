require("dotenv").config();
const cors = require("cors");
const path = require("path");
const express = require("express");
const routerApi = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./dist")));
routerApi(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
