const { findAllSpecie } = require("../repository/specie");
const {
  RESPONSE,
  HTTP_SUCESS_CODE,
  HTTP_ERROR_CODE,
  SUCCESS_MESSAGE,
  SUCCESS_CODE,
  ERROR_CODE,
} = require("../utils/constants");

module.exports.getSpeciesHandler = async () => {
  try {
    const species = await findAllSpecie();
    return RESPONSE(HTTP_SUCESS_CODE, SUCCESS_CODE, SUCCESS_MESSAGE, species);
  } catch (e) {
    return RESPONSE(HTTP_ERROR_CODE, ERROR_CODE, e.message);
  }
};
