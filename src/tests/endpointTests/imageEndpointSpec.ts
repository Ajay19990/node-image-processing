import app from "../../app";
import supertest from "supertest";

const request = supertest(app);

describe("Endpoint testing", () => {
  it("Returns 400 for invalid request", async () => {
    const response = await request.get(
      "/api/convert?imageName=Ajay&width=500&height=100"
    );
    expect(response.statusCode).toBe(400);
  });

  it("Returns 200 for valid request", async () => {
    const response = await request.get(
      "/api/convert?imageName=santamonica&width=500&height=100"
    );
    expect(response.statusCode).toBe(200);
  });
});
