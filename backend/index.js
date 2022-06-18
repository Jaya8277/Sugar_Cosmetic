const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://sugarcosmetics:masaiuint5@cluster0.nfskqzh.mongodb.net/sugarCosmetics?retryWrites=true&w=majority",
);

// mongodb+srv://sugarcosmetics:masaiunit5@cluster0.nfskqzh.mongodb.net/sugarCosmetics?retryWrites=true&w=majority

const express = require("express");
const app = express();
const cors = require("cors");
const dataRouter = require("./routes/data");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    orgin: ["https://sugarCosmetics.netlify.app/"],
  }),
);
app.use("/products", dataRouter);

app.listen(8080, async () => {
  await connection;
  console.log("connected to db");
  console.log("server started http://localhost:8080/");
});
