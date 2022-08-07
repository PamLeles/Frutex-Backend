import express from "express";
import cors from 'cors';
import appRoutes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use(cors({ allowedHeaders: '*' }));

app.use(appRoutes);

const API_PORT = 3003

app.listen(API_PORT, () =>
  console.log(`Running on URL: localhost:${API_PORT}`),
);