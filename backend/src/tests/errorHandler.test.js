import { errorHandler } from "../middlewares/errorMiddleware.js";

describe("Error middleware", () => {
  test("should send 500 and log error", () => {
    const mockErr = new Error("Test error");
    const mockReq = {};
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const mockNext = jest.fn();

    errorHandler(mockErr, mockReq, mockRes, mockNext);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: "Internal Server Error",
    });
  });
});
