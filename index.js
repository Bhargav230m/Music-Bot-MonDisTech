const {
    Client,
    GatewayIntentBits,
    Partials,
    Collection,
  } = require("discord.js");

  const { Player }  = require("discord-player")

  const { Guilds, GuildMembers, GuildMessages, MessageContent,GuildVoiceStates} = GatewayIntentBits;
  const { User, Message, GuildMember, ThreadMember } = Partials;
  
  const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages, MessageContent, GuildVoiceStates],
    partials: [User, Message, GuildMember, ThreadMember],
  });



  const { loadEvents } = require("./Handlers/eventHandler");
  
  client.config = require("./config.json");
  client.events = new Collection();
  client.subCommands = new Collection(); //SubCommand handler
  client.commands = new Collection();
  loadEvents(client);

  // Add the player on the client
client.player = new Player(client, {
  ytdlOptions: {
      quality: "highestaudio",
      highWaterMark: 1 << 25
  }
})

  client.login(client.config.token);