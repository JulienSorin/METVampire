const CommandoClient = require("./client");
const path = require("path");

const client = new CommandoClient({
  commandPrefix: "!met",
  owner: "",
  disableMentions: "everyone",
});

client.registry
  .registerDefaultTypes()
  .registerGroups([["divers", "Divers"]])
  .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
  console.log(`Bot METVampire lancé !`);
});

client.on("error", console.error);

client.login("");
