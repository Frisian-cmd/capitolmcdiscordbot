module.exports = {
	name: 'map',
	description: "stuurt dynmap link in embed",
	execute(message, args, Discord){
		const map = new Discord.MessageEmbed()
		.setColor('#e67e22')
		.setTitle('Hier is de map')
		.setImage('https://cdn.discordapp.com/attachments/815958421693136946/890522221263601744/LegendKingdoms.png')
		.setDescription('Alsjeblieft')
		.setFooter('Bot development by Frisian™#7989')

		message.channel.send(map);
	}
}