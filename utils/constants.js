const RESPONSE = (statusCode, code, message, data) => {
  return {
    statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS",
    },
    body: JSON.stringify({
      code,
      message,
      data,
    }),
  };
};

const HTTP_SUCESS_CODE = 200;
const HTTP_ERROR_CODE = 500;

const SUCCESS_CODE = 1;
const ERROR_CODE = 0;

const SUCCESS_MESSAGE = "The operation was carried out successfully";

module.exports = {
  RESPONSE,
  HTTP_SUCESS_CODE,
  HTTP_ERROR_CODE,
  SUCCESS_MESSAGE,
  SUCCESS_CODE,
  ERROR_CODE,
};
