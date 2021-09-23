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
			{name: '!dynmap', value: "stuurt de dynmap van LegendKingdoms minecraft wereld"},
			{name: '!map', value: "stuurt een afbeelding van de map van Legendskingdom wereld"},
			//{name: '!vote', value: "stuurt de vote sites"},
			{name: '!web/website/site', value: "stuurt de website van LegendKingdoms"},
		//	{name: '!play', value: "voeg link of naam van liedje erachter en bot speelt dit af"},
			//{name: '!leave/disconnect/bye/fuckoff', value: "Bot stopt met muziek spelen en verlaat het spraakkanaal"},
			{name: '!help', value: "stuurt dit bericht"},
		)
		.setFooter('Bot development by Frisian™#7989');

		message.channel.send(help);
	}
}