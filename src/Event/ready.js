const { Routes, REST, ActivityType } = require('discord.js');
const config = require('../../config');
const { slashcmd } = require('../handler/SlashCommand');


module.exports = async (client) => { 
    client.user.setPresence({ activies: [{ type: ActivityType.Streaming, url: "https://www.twitch.tv/raviwen", name: config.Bot.Status}], status: "dnd" })

    console.log(`[BOT] ${client.user.tag} is ready!`);

    
    const rest = new REST({ version: '10' }).setToken(config.Bot.Token);

    try {
      await rest.put(
        Routes.applicationCommands(client.user.id),
        { body: slashcmd }
      );

      console.log('[/] Yüklendi.');
    } catch (err) {
      console.log(err);
    }


}


module.exports.event = {
  "isim": "ready",
}
