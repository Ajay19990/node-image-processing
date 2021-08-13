import { Router, Request, Response } from "express";
import validateParams from "../utils/validateRequest";
import processImage from "./api/processImage";

const routes = Router();
routes.get("/", (req: Request, res: Response) => {
  res.send("Main API page");
});

routes.get("/convert", [validateParams, processImage]);

export default routes;
