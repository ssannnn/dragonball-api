import "dotenv/config"
import express from "express"
import cors from "cors"
import { router } from "./routes";

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());

app.use(router);

app.listen(PORT, () => console.log(`Conectado en el puerto ${PORT}`));

