const { MessageEmbed } = require("discord.js");
const config = require("../../config.json");

module.exports.run = async (bot, message, args) => {

    const embed = new MessageEmbed()
        .setTitle("Total Members")
        .addField("Members", `${message.guild.memberCount}`)
        .setColor(config.bot.botColor)
        .setFooter(config.bot.botFooter)
        .setThumbnail(config.bot.botThumbnail)

    message.channel.send({ embeds: [embed] })

}

module.exports.help = {
    name: `${config.bot.botPrefix}${config.commands.memberCommand}`
}