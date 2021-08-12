"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
const validateParams = routes.use("/", (req, res, next) => {
    if (!req.query.imageName) {
        res.status(400);
        return res.send("Please specify image name");
    }
    if (!req.query.width) {
        res.status(400);
        return res.send("Please specify width").sendStatus(400);
    }
    if (!req.query.height) {
        res.status(400);
        return res.send("Please specify height").sendStatus(400);
    }
    next();
});
exports.default = validateParams;
