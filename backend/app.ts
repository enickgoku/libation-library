import express, { Express } from "express";
import cors from "cors";
import { notFound } from "./errors/notFound";
import { errorHandler } from "./errors/errorHandler";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(notFound);
app.use(errorHandler);

export default app;
