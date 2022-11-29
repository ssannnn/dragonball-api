import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";
import db from "./config/mongo"
import path from "path"

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use('/api/characters/images', express.static(path.join(__dirname, 'assets/images')));

db().then(() => console.log("Connection established"));

app.listen(PORT, () => console.log(`Conectado en el puerto ${PORT}`));

