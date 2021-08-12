import express from "express";
import validateParams from "../utils/validateRequest";
import processImage from "./api/processImage";

const routes = express.Router();
routes.get("/", (req, res) => {
  res.send("Main API page");
});

routes.get("/convert", [validateParams, processImage]);

export default routes;
