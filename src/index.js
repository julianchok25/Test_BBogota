const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

//middlw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
