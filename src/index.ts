import * as dotenv from "dotenv";
import app from "./server";

dotenv.config();

app.listen(3009, () => {
  console.log("Server is listening http://localhost:3009");
});
