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
const convertImage_1 = __importDefault(require("../../utils/convertImage"));
describe("Testing image conversion", () => {
    it("expect convertImage(santamonica) to return a string", () => __awaiter(void 0, void 0, void 0, function* () {
        const sourceFilePath = process.cwd() + `/assets/full/santamonica.jpg`;
        const resultFilePath = process.cwd() + `/assets/thumb/santamonicaThumb.jpg`;
        const result = yield convertImage_1.default(sourceFilePath, 200, 200, resultFilePath);
        expect(result).toBe(resultFilePath);
    }));
});
