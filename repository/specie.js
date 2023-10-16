const { geSpecieModel } = require("../models/specie");

const createSpecie = async (
  nombre,
  clasificacion,
  designacion,
  alturaPromedio,
  colorPiel,
  colorCabello,
  colorOjo,
  promedioVida,
  idioma,
) => {
  const specie = await geSpecieModel().build({
    nombre,
    clasificacion,
    designacion,
    alturaPromedio,
    colorPiel,
    colorCabello,
    colorOjo,
    promedioVida,
    idioma,
  });
  return await specie.save();
};

const findAllSpecie = async () => {
  return await Specie.findAll();
};

module.exports = {
  createSpecie,
  findAllSpecie,
};
