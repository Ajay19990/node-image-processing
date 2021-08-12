import express from "express";

const routes = express.Router();
const validateParams = routes.use("/", (req, res, next) => {
  if (!req.query.imageName) {
    res.status(400);
    return res.send("Please specify image name");
  }
  if (!req.query.width || isNaN(parseInt(`${req.query.width}`))) {
    res.status(400);
    return res.send("Please specify a valid width");
  }
  if (!req.query.height || isNaN(parseInt(`${req.query.height}`))) {
    res.status(400);
    return res.send("Please specify a valid height");
  }
  next();
});

export default validateParams;
