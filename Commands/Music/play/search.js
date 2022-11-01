const { ChatInputCommandInteraction, Client, EmbedBuilder } = require("discord.js")
const { QueryType } = require("discord-player")
module.exports = {
    subCommand: "play.search",
   
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} client
     */
   async execute(interaction, client) {
        // Make sure the user is inside a voice channel
		if (!interaction.member.voice.channel) return interaction.reply("You need to be in a Voice Channel to play a song.");


 // Create a play queue for the server
 const queue = await client.player.createQueue(interaction.guild);

 // Wait until you are connected to the channel
 if (!queue.connection) await queue.connect(interaction.member.voice.channel)



            // Search for the song using the discord-player
            let url = interaction.options.getString("searchterms")
            const result = await client.player.search(url, {
                requestedBy: interaction.user,
                searchEngine: QueryType.AUTO
            })

            // finish if no tracks were found
            if (result.tracks.length === 0)
                return interaction.editReply("No results")
            
            // Add the track to the queue
            const song = result.tracks[0]
            await queue.addTrack(song)
            const embed = new EmbedBuilder()
                .setDescription(`**[${song.title}](${song.url})** has been added to the Queue`)
                .setThumbnail(song.thumbnail)
                .setFooter({ text: `Duration: ${song.duration}`})
                  // Respond with the embed containing information about the player
        await interaction.reply({
            embeds: [embed]
        })
         // Play the song
 if (!queue.playing) await queue.play()
    }
}