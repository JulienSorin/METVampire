const { Command } = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class EmbedCommand extends Command {
  constructor(client) {
    super(client, {
      name: "help",
      memberName: "help",
      group: "divers",
      description: "Affiche l'aide.",
      ownerOnly: true,
      clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"], // le bot doit avoir la permission d'envoyer des messages
      throttling: {
        usages: 2,
        duration: 10,
      },
    });
  }

  async run(msg) {
    const embed = new Discord.MessageEmbed(); // création de l'embed

    embed
      .setColor(`BLUE`)
      .setTitle(`Fiche utilisation du bot`)

      .setDescription(
        `Ce bot sert à faciliter les actions induites par un jet de Pierre Feuille Ciseaux.`
      )
      .setFooter(`METVampire`, `${this.client.user.displayAvatarURL()}`)

      .setImage(`${this.client.user.displayAvatarURL()}`)

      .setTimestamp()

      .addField(`Comment utiliser le bot METVampire ?`, "-")

      .addField(
        `-------`,
        `**!met jet** : Affiche l'aide de la commande. \n
        **!met jet [p / f / c] **: Lance un jet avec comme valeur l'argument passé en paramètre. \n
        **!met jet ?** : Lance un jet aléatoire. \n
        (alias : p / P / pierre / Pierre    |    f / F / feuille / Feuille    |    c / C / ciseaux / Ciseaux)`,
        true
      );

    msg.say(embed);
  }
};
