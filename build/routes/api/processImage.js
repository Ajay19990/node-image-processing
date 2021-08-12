"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_cache_1 = __importDefault(require("node-cache"));
const convertImage_1 = __importDefault(require("../../utils/convertImage"));
const nodeCache = new node_cache_1.default();
const routes = express_1.default.Router();
const processImage = routes.use("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sourceFilePath = process.cwd() + `/assets/full/${req.query.imageName}.jpg`;
    const resultFilePath = process.cwd() + `/assets/thumb/${req.query.imageName}Thumb.jpg`;
    const width = parseInt(`${req.query.width}`);
    const height = parseInt(`${req.query.height}`);
    const imageName = req.query.imageName;
    const cacheKey = `${imageName}#${width}#${height}`;
    const cachedResultFilePath = nodeCache.get(cacheKey);
    if (cachedResultFilePath != undefined) {
        return res.sendFile(cachedResultFilePath);
    }
    try {
        yield convertImage_1.default(sourceFilePath, width, height, resultFilePath);
        nodeCache.set(cacheKey, resultFilePath);
        return res.sendFile(resultFilePath);
    }
    catch (e) {
        if (e.message == "Image Not Found") {
            res.status(400);
            return res.send("Image not found");
        }
        else {
            res.status(400);
            return res.send("Failed to process the image");
        }
    }
}));
exports.default = processImage;
