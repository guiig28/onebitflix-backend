import express from "express";
import { database } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";

const app = express();

app.use(express.static("public"));

app.use(adminJs.options.rootPath, adminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log("DB conection successfull");
  });
  console.log(`Server started successfuly at port ${PORT}`);
});