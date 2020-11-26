const { pfc } = require("../../utils");
const { Command } = require("discord.js-commando");

module.exports = class ReplyCommand extends Command {
  constructor(client) {
    super(client, {
      name: "stats",
      memberName: "stats",
      group: "divers",
      description: "stats",
      throttling: {
        usages: 10,
        duration: 100,
      },
    });
  }

  async run(msg) {
    const args = msg.content.split(" ");
    if (args.length < 3) {
      msg.say("`Format attendu : stats [NOMBRE]`");
      return;
    }
    const nb = args[2];
    if (isNaN(nb)) {
      msg.say("`L'argument donné en paramètre doit être un entier.`");
      return;
    }
    if (nb > 1e8) {
      msg.say("Nombre trop grand.");
      return;
    }
    let m = { p: 0, f: 0, c: 0 };
    for (let i = 0; i < nb; i++) {
      let k = pfc();
      m[k]++;
    }
    msg.say(
      `\`Stats : \n Nombre de pierre: ${m["p"]} [moyenne : ${
        m["p"] / nb
      }] \n Nombre de feuille: ${m["f"]} [moyenne : ${
        m["f"] / nb
      }] \n Nombre de ciseaux: ${m["c"]} [moyenne : ${m["c"] / nb}] \``
    );
  }
};
