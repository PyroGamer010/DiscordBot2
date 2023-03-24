const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		// await interaction.reply('Pong!');
		// await wait(2000);
		// await interaction.editReply('Pong again!');

		// await interaction.reply({ content: 'Secret Pong!', ephemeral: true });

		// await interaction.followUp('Pong!');

		await interaction.deferReply();
		await wait(1500);
		await interaction.editReply('Pong!');

		// const message = await interaction.fetchReply();
		// console.log(`Fetched reply: ${message.content}`);

		// await interaction.deleteReply();
	},
};