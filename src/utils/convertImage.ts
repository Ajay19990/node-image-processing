import { promises as fsPromises } from "fs";
import sharp from "sharp";

const convertImage = async (
  sourceFilePath: string,
  width: number,
  height: number,
  resultFilePath: string
) => {
  try {
    await fsPromises.readFile(sourceFilePath);
  } catch (e) {
    throw new Error("Image Not Found");
  }

  try {
    await sharp(sourceFilePath).resize(width, height).toFile(resultFilePath);
    return resultFilePath;
  } catch (e) {
    throw new Error("Failed to convert the image");
  }
};

export default convertImage;
