import express from "express";
import validateParams from "../utils";
import processImage from "./api/processImage";

const routes = express.Router();
routes.get("/", (req, res) => {
  res.send("Main API page");
});

routes.get("/process-image", [validateParams, processImage]);

export default routes;
