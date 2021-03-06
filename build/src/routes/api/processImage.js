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
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = require("fs");
const node_cache_1 = __importDefault(require("node-cache"));
const nodeCache = new node_cache_1.default();
const routes = express_1.default.Router();
const processImage = routes.use("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const sourceFilePath = process.cwd() + `/assets/full/${req.query.imageName}.jpg`;
    const resultFilePath = process.cwd() + `/assets/thumb/${req.query.imageName}Thumb.jpg`;
    const width = parseInt(`${req.query.width}`);
    const height = parseInt(`${req.query.height}`);
    const imageName = req.query.imageName;
    const cacheKey = `${imageName}#${width}#${height}`;
    try {
        yield fs_1.promises.readFile(sourceFilePath);
    }
    catch (e) {
        return res.send("Unable to find an image with this image name");
    }
    const cachedResultFilePath = nodeCache.get(cacheKey);
    if (cachedResultFilePath != undefined) {
        return res.sendFile(cachedResultFilePath);
    }
    try {
        yield sharp_1.default(sourceFilePath).resize(width, height).toFile(resultFilePath);
        nodeCache.set(cacheKey, resultFilePath);
        return res.sendFile(resultFilePath);
    }
    catch (e) {
        console.log(e);
        return res.send("Failed to process the image");
    }
}));
exports.default = processImage;
