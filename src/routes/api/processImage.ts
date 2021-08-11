import express from "express";
import sharp from "sharp";
import { promises as fsPromises } from "fs";
import NodeCache from "node-cache";

const nodeCache = new NodeCache();
const routes = express.Router();

const processImage = routes.use("/", async (req, res) => {
  const sourceFilePath =
    process.cwd() + `/assets/full/${req.query.imageName}.jpg`;
  const resultFilePath =
    process.cwd() + `/assets/thumb/${req.query.imageName}Thumb.jpg`;

  const width = parseInt(`${req.query.width}`);
  const height = parseInt(`${req.query.height}`);
  const imageName = req.query.imageName;
  const cacheKey = `${imageName}#${width}#${height}`;

  try {
    await fsPromises.readFile(sourceFilePath);
  } catch (e) {
    return res.send("Unable to find an image with this image name");
  }

  const cachedResultFilePath = nodeCache.get(cacheKey);
  if (cachedResultFilePath != undefined) {
    return res.sendFile(cachedResultFilePath as string);
  }

  try {
    await sharp(sourceFilePath).resize(width, height).toFile(resultFilePath);
    nodeCache.set(cacheKey, resultFilePath);
    return res.sendFile(resultFilePath);
  } catch (e) {
    console.log(e);
    return res.send("Failed to process the image");
  }
});

export default processImage;
