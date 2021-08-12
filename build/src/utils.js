"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
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
exports.default = validateParams;
