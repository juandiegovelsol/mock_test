import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./server/routes";
/* import { handleErrors } from './server/middleware'; */

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { app };
