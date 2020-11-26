const CommandoClient = require("./client");
const path = require("path");

const client = new CommandoClient({
  commandPrefix: "!met",
  owner: "638769217398636555",
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

client.login("NzgwMTQ2NzY4MzQ3MTM2MDMw.X7q2TA.meEe_1o87l5OiMvlNvB6wxGJU48");
