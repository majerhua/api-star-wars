const fetch = require("node-fetch");
const {
  RESPONSE,
  HTTP_SUCESS_CODE,
  HTTP_ERROR_CODE,
  SUCCESS_MESSAGE,
  SUCCESS_CODE,
  ERROR_CODE,
} = require("../utils/constants");

module.exports.getIdSpecieHandler = async (event) => {
  try {
    let { id } = event.pathParameters;

    const url = `${process.env.URL_SWAPI_SPECIE_ID}/${id}`;
    const resSpecies = await fetch(url);
    const specie = await resSpecies.json();

    if (specie.detail == "Not found") {
      throw new Error("Not found Specie");
    }

    const specieSpanish = {
      nombre: specie.name,
      clasificacion: specie.classification,
      designacion: specie.designation,
      alturaPromedio: specie.average_height,
      colorPiel: specie.skin_colors,
      colorCabello: specie.hair_colors,
      colorOjo: specie.eye_colors,
      promedioVida: specie.average_lifespan,
      idioma: specie.language,
    };

    return RESPONSE(
      HTTP_SUCESS_CODE,
      SUCCESS_CODE,
      SUCCESS_MESSAGE,
      specieSpanish,
    );
  } catch (e) {
    return RESPONSE(HTTP_ERROR_CODE, ERROR_CODE, e.message);
  }
};
