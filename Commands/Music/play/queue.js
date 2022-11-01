const { EmbedBuilder, ChatInputCommandInteraction, Client } = require("discord.js")


module.exports = {
 subCommand: "play.queue",

 /**
  * 
  * @param {ChatInputCommandInteraction} interaction 
  * @param {Client} client 
  * @returns 
  */

   async execute( interaction, client) {
  
const { guild } = interaction;

    // Get the current queue
    const queue = client.player.getQueue(guild)

        // check if there are songs in the queue
        if (!queue || !queue.playing)
        {
            await interaction.reply("There are no songs in the queue");
            return;
        }

        // Get the first 10 songs in the queue
        const queueString = queue.tracks.slice(0, 10).map((song, i) => {
            return `${i}) [${song.duration}]\` ${song.title} - <@${song.requestedBy.id}>`
        }).join("\n")

        // Get the current song
        const currentSong = queue.current

     
       
                const embed = new EmbedBuilder()
                    .setDescription(`**Currently Playing**\n` + 
                        (currentSong ? `\`[${currentSong.duration}]\` ${currentSong.title} - <@${currentSong.requestedBy.id}>` : "None") +
                        `\n\n**Queue**\n${queueString}`)
                    .setThumbnail(currentSong.setThumbnail)


interaction.reply({ embeds: [embed] })

            
    }
}