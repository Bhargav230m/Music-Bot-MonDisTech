const { ChatInputCommandInteraction } = require("discord.js")

module.exports = {
	subCommand: "play.pause",

/**
 * 
 * @param {ChatInputCommandInteraction} interaction 
 * @param {Client} client 
 * @returns 
 */

async execute( interaction, client ) {
    
const { guild } = interaction;

    // Get the current queue
    const queue = client.player.getQueue(guild)

        // Check if the queue is empty
		if (!queue) {
			await interaction.reply({content: "There is no song playing"})
			return;
		}

        // Pause the current song
		queue.setPaused(true);

        await interaction.reply({content: "Paused the song!"})
}
}