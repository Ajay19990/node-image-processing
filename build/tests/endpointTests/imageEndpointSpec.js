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
const request = supertest_1.default(app_1.default);
describe("Endpoint testing", () => {
    it("Returns 400 for invalid request", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/convert?imageName=Ajay&width=500&height=100");
        expect(response.statusCode).toBe(400);
    }));
    it("Returns 200 for invalid request", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get("/api/convert?imageName=santamonica&width=500&height=100");
        expect(response.statusCode).toBe(200);
    }));
});
