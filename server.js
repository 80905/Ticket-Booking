const app = require("./app");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

connect(process.env.LOCAL_DB, () => {
  console.log("DB connected successfully");
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`We are listening you at port : ${port}`);
});
