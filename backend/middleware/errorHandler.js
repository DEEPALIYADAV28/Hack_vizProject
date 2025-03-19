const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`);

  let statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Default to 500 if not set

  if (err.name === "ValidationError") {
    statusCode = 400; // Bad Request for validation errors
  } else if (err.name === "JsonWebTokenError") {
    statusCode = 401; // Unauthorized if JWT is invalid
  } else if (err.name === "TokenExpiredError") {
    statusCode = 403; // Forbidden if JWT is expired
  } else if (err.code === 11000) {
    statusCode = 409; // Conflict for duplicate database entries
  }

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack, // Hide stack in production
  });
};

module.exports = errorHandler;
