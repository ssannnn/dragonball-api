import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());

app.use(router);

db().then(() => console.log("Connection established"));

app.listen(PORT, () => console.log(`Conectado en el puerto ${PORT}`));

