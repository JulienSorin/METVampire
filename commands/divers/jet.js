const { Command } = require("discord.js-commando");

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

const mapChoix = {
  p: "Pierre",
  f: "Feuille",
  c: "Ciseaux",
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function pfc() {
  return choix[getRandomInt(3)];
}

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "jet",
      memberName: "jet",
      group: "divers",
      description: "jet",
      throttling: {
        usages: 10,
        duration: 1,
      },
      guildOnly: true,
    });
  }

  async run(msg) {
    const args = msg.content.split(" ");
    if (args.length < 3) {
      msg.say("`Format attendu : jet [p / f / c / ?]`");
      return;
    }
    let choixJoueur = args[2];
    if (choixJoueur === "?") choixJoueur = pfc();
    const included = argsPossibles.includes(choixJoueur);
    if (included) {
      let argChoixJoueur = choixJoueur[0].toLowerCase();
      let argChoixOrdinateur = pfc();

      const indexArgChoixJoueur = choix.indexOf(argChoixJoueur);
      const indexArgChoixOrdinateur = choix.indexOf(argChoixOrdinateur);

      let circle = "";

      if (argChoixJoueur === argChoixOrdinateur) {
        circle = ":orange_circle:";
      } else if (choix[(indexArgChoixJoueur + 1) % 3] === argChoixOrdinateur) {
        circle = ":green_circle:";
      } else {
        circle = ":red_circle:";
      }
      msg.say(
        `${circle} (${mapChoix[argChoixJoueur]} contre ${
          mapChoix[argChoixOrdinateur]
        }) [${msg.author.toString()}]`
      );
    } else {
      msg.say(
        "`/!\\ Erreur dans la commande ! /!\\ \n Format attendu : jet [p / f / c / ?]`"
      );
    }
  }
};
