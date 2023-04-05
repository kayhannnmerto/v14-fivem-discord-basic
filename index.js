const { Client, GatewayIntentBits, Collection,Partials } = require('discord.js');
const client = global.raviwen =new Client({ 
    intents:  [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent],
    partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction, Partials.Presence],
  });

const Config = require('./config');
client.slashcmd = new Collection();
["Event","SlashCommand"].forEach(handler => { 
    require(`./src/handler/${handler}`);
});


client.login(Config.Bot.Token).catch(err => console.log(err));