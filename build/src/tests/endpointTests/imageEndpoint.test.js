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
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
// import express from "express";
// const app = express();
//
// supertest(app)
//   .get("/api/process-image?imageName=santamonica&width=500&height=100")
//   .expect(200);
it("Testing to see if Jest works", () => {
    expect(1).toBe(1);
});
// supertest(app)
//   .get("/api/process-image?imageName=santamonica&width=500&height=100")
//   .expect(200)
//   .end(function (err, res) {
//     if (err) throw err;
//   });
// @ts-ignore
it("Gets the test endpoint", (done) => __awaiter(void 0, void 0, void 0, function* () {
    // Sends GET Request to /test endpoint
    const res = yield supertest_1.default(app_1.default).get("/api/process-image?imageName=Ajay&width=500&height=100");
    expect(res.status).toBe(200);
    // ...
}));
