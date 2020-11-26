const choix = ["p", "c", "f"];
const argsPossibles = [
  "p",
  "pierre",
  "Pierre",
  "P",
  "c",
  "ciseaux",
  "Ciseaux",
  "C",
  "f",
  "feuille",
  "Feuille",
  "F",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pfc() {
  return choix[getRandomInt(3)];
}

const mapChoix = {
  p: "Pierre",
  f: "Feuille",
  c: "Ciseaux",
};

module.exports = {
  choix: choix,
  argsPossibles: argsPossibles,
  mapChoix: mapChoix,
  getRandomInt: getRandomInt,
  pfc: pfc,
};
