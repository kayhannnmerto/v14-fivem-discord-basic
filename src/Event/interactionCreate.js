const client = global.raviwen;

module.exports = async (interaction) => {
    if (!interaction.isCommand()) return;
    const args = [];
    const cmd = client.slashcmd.get(interaction.commandName);
    if(!cmd) return;
    interaction.options.data.forEach((x) => x.value && args.push(x.value));
    await cmd.run(client, interaction,args);
}
module.exports.event = {
    "isim": "interactionCreate",
}
