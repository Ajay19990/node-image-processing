import express from "express";
import NodeCache from "node-cache";
import convertImage from "../../utils/convertImage";

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

  const cachedResultFilePath = nodeCache.get(cacheKey);
  if (cachedResultFilePath != undefined) {
    return res.sendFile(cachedResultFilePath as string);
  }

  try {
    await convertImage(sourceFilePath, width, height, resultFilePath);
    nodeCache.set(cacheKey, resultFilePath);
    return res.sendFile(resultFilePath);
  } catch (e) {
    if (e.message == "Image Not Found") {
      res.status(400);
      return res.send("Image not found");
    } else {
      res.status(400);
      return res.send("Failed to process the image");
    }
  }
});

export default processImage;
