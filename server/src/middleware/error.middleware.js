const { logEvents } = require("./logger.middleware");

const errorHandler = (err, req, res, next) => {
  logEvents(
    `${err.name}\t${err.name}\t${req.method}\t${req.headers.origin}`,
    "errLog.log"
  );
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = { errorHandler };
