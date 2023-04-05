const {SlashCommandBuilder, EmbedBuilder} = require("discord.js")
const config = require("../../config");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ip")
        .setDescription("Sunucuya bilgisi verilir."),
    run: async (client, interaction) => {

        const embed = new EmbedBuilder().setTimestamp().setFooter({ text: `${config.Bot.Status}`}).setColor('Random').setAuthor({ name: interaction.user.username, iconURL: interaction.user.avatarURL({dynamic:true})})
        

        interaction.reply({
            embeds: [
                embed.setDescription(`Merhabalar ${interaction.user}, Sunucumuza \`connect ${config.Fivem.SunucuIP}\` yazarak giriş yapabilirsiniz.`)
            ],
            ephemeral: true,
        })
}}