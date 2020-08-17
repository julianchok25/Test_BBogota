const express = require("express");
const app = express();

//middlw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/index"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
