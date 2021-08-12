"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
exports.app = express_1.default();
const port = 3000;
exports.app.get("/", (req, res) => {
    res.send("Hello from server");
});
exports.app.use("/api", routes_1.default);
exports.app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = exports.app;
