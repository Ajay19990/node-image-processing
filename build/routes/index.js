"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../utils/validateRequest"));
const processImage_1 = __importDefault(require("./api/processImage"));
const routes = express_1.default.Router();
routes.get("/", (req, res) => {
    res.send("Main API page");
});
routes.get("/convert", [validateRequest_1.default, processImage_1.default]);
exports.default = routes;
