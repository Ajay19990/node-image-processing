import convertImage from "../../utils/convertImage";

describe("Testing image conversion", () => {
  it("expect convertImage(santamonica) to return a saved file path", async () => {
    const sourceFilePath = process.cwd() + `/assets/full/santamonica.jpg`;
    const resultFilePath = process.cwd() + `/assets/thumb/santamonicaThumb.jpg`;
    const result = await convertImage(sourceFilePath, 200, 200, resultFilePath);
    expect(result).toBe(resultFilePath);
  });
});
