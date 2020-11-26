const CommandoClient = require("./client");
const path = require("path");

const client = new CommandoClient({
  commandPrefix: "!met", // Préfixe des commandes (ex: ?help)
  owner: "638769217398636555", // ID de l'owner du bot, peut également être un tableau d'id pour plusieurs owners, ex: ['ID1', 'ID2']
  disableMentions: "everyone", // Désactive, par sécurité, l'utilisation du everyone par le bot
});

client.registry
  .registerDefaultTypes()
  .registerGroups([["divers", "Divers"]])
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
  console.log(`Bot METVampire lancé !`);
});

client.on("error", console.error); // Afficher les erreurs

client.login("NzgwMTQ2NzY4MzQ3MTM2MDMw.X7q2TA.WSAmaJqkaQLMahJP8v0IdPziGno");
