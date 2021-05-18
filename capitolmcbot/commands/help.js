module.exports = {
	name: 'help',
	description: "stuurt embed voor help aka met commands",
	execute(message, args, Discord){
		const help = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('De commands voor deze bot:')
		.setDescription(' ')
		.addFields(
			{name: '!ip/server', value: "stuurt minecraft ip van deze server"},
			{name: '!map/!dynmap', value: "stuurt de dynmap van LegendKingdoms minecraft wereld"},
			{name: '!vote', value: "stuurt de vote sites"},
			{name: '!web/website/site', value: "stuurt de website van LegendKingdoms"},
			{name: '!help', value: "stuurt dit bericht"},
		)
		.setFooter('Bot development by Frisian™#7989');

		message.channel.send(help);
	}
}