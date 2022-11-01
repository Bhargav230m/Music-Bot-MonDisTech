
const { EmbedBuilder, ChatInputCommandInteraction, Client } = require("discord.js")

module.exports = {
	subCommand: "play.skip",

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

        // If there is no queue, return
		if (!queue)
        {
            await interaction.reply("There are no songs in the queue");
            return;
        }

        const currentSong = queue.current

        // Skip the current song
		queue.skip()

        // Return an embed to the user saying the song has been skipped
     
        
              const embed = new EmbedBuilder()
                    .setDescription(`${currentSong.title} has been skipped!`)
                    .setThumbnail(currentSong.thumbnail)
        interaction.reply({ embeds: [embed]})
	},
}