import express from "express";

const routes = express.Router();
const validateParams = routes.use("/", (req, res, next) => {
  if (!req.query.imageName) {
    return res.send("Please specify image name");
  }
  if (!req.query.width) {
    return res.send("Please specify width");
  }
  if (!req.query.height) {
    return res.send("Please specify height");
  }
  next();
});

export default validateParams;
