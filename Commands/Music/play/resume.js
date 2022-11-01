const { ChatInputCommandInteraction, Client } = require("discord.js")

module.exports = {
subCommand: "play.resume",

/**
 * 
 * @param {ChatInputCommandInteraction} interaction
 * @param {Client} client
 * @returns 
 */

	async execute( interaction, client ){
      
const { guild } = interaction;

        // Get the current queue
		const queue = client.player.getQueue(guild)

        // Check if the queue is empty
		if (!queue)
        {
            await interaction.reply("No songs in the queue");
            return;
        }

        // Pause the current song
		queue.setPaused(false);

        await interaction.reply("Player has been resumed.")
	},
}