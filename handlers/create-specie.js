const { createSpecie } = require("../repository/specie");
const {
  RESPONSE,
  HTTP_SUCESS_CODE,
  HTTP_ERROR_CODE,
  SUCCESS_MESSAGE,
  SUCCESS_CODE,
  ERROR_CODE,
} = require("../utils/constants");

module.exports.createSpecieHandler = async (event) => {
  try {
    let requestBody = JSON.parse(event.body);
    let {
      nombre,
      clasificacion,
      designacion,
      alturaPromedio,
      colorPiel,
      colorCabello,
      colorOjo,
      promedioVida,
      idioma,
    } = requestBody;

    if (nombre == "" || nombre == undefined || nombre == null) {
      throw new Error("El campo nombre está vacio");
    } else if (
      clasificacion == "" ||
      clasificacion == undefined ||
      clasificacion == null
    ) {
      throw new Error("El campo clasificación está vacio");
    } else if (
      designacion == "" ||
      designacion == undefined ||
      designacion == null
    ) {
      throw new Error("El campo designacion está vacio");
    } else if (
      alturaPromedio == "" ||
      alturaPromedio == undefined ||
      alturaPromedio == null
    ) {
      throw new Error("El campo altura promedio está vacio");
    } else if (colorPiel == "" || colorPiel == undefined || colorPiel == null) {
      throw new Error("El campo color de piel está vacio");
    } else if (
      colorCabello == "" ||
      colorCabello == undefined ||
      colorCabello == null
    ) {
      throw new Error("El campo color de cabello está vacio");
    } else if (colorOjo == "" || colorOjo == undefined || colorOjo == null) {
      throw new Error("El campo color de ojo está vacio");
    } else if (
      promedioVida == "" ||
      promedioVida == undefined ||
      promedioVida == null
    ) {
      throw new Error("El campo promedio de vida está vacio");
    } else if (idioma == "" || idioma == undefined || idioma == null) {
      throw new Error("El campo idioma está vacio");
    } else {
      const specie = await createSpecie(
        nombre,
        clasificacion,
        designacion,
        alturaPromedio,
        colorPiel,
        colorCabello,
        colorOjo,
        promedioVida,
        idioma,
      );
      return RESPONSE(HTTP_SUCESS_CODE, SUCCESS_CODE, SUCCESS_MESSAGE, specie);
    }
  } catch (e) {
    return RESPONSE(HTTP_ERROR_CODE, ERROR_CODE, e.message);
  }
};
