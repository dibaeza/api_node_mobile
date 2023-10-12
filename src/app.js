import express from "express";
import cors from "cors";
import { config } from "dotenv";
config();

//Routes import

import indexRoutes from "./routes/index.routes.js";
import usersRoutes from "./routes/users.routes.js";


const app = express();

//settings
app.set("port" , process.env.PORT);

// middlewares
app.use(express.json());
app.use(cors());


//Routes

app.use("/api" , indexRoutes);
app.use("/api/users" , usersRoutes);


export default app;
