const { ChatInputCommandInteraction, Client } = require("discord.js")

module.exports = {
    subCommand: "play.exit",
    
		/**
		 *  
		 * @param {Client} client
		 * @param {ChatInputCommandInteraction} interaction  
		 */
	async execute(interaction, client) {
const { guild } = interaction;
        // Get the current queue
		const queue = client.player.getQueue(guild);

		if (!queue) {
			await interaction.reply({ content: "There is no song playing"})
			return;
		}

        // Deletes all the songs from the queue and exits the channel
		queue.destroy();

        await interaction.reply({ content: "Stopped playing the song"})
	},
}