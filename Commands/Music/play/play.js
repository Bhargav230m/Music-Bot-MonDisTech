
const { SlashCommandBuilder } = require("discord.js")


module.exports = {
	data: new SlashCommandBuilder()
		.setName("play")
		.setDescription("play a song from YouTube.")
		.addSubcommand(subcommand =>
			subcommand
				.setName("search")
				.setDescription("Searches for a song and plays it")
				.addStringOption(option =>
					option.setName("searchterms").setDescription("search keywords").setRequired(true)
				)
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("song")
				.setDescription("Plays a single song from YT")
				.addStringOption(option => option.setName("url").setDescription("the song's url").setRequired(true))
        )
		.addSubcommand(subcommand => 
			subcommand.setName("exit")
			.setDescription("exits the channel")
			)
			.addSubcommand(subcommand => 
				subcommand.setName("pause")
				.setDescription("pauses the song")
				)
				.addSubcommand(subcommand => 
					subcommand.setName("queue")
					.setDescription("Adds the song to the queue")
					)
					.addSubcommand(subcommand => 
						subcommand.setName("skip")
						.setDescription("Skips the song in the queue")
						)
						.addSubcommand(subcommand => 
							subcommand.setName("resume")
							.setDescription("resumes the song")
							)


							
        }
        
