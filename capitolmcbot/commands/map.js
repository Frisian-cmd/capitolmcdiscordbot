module.exports = {
	name: 'map',
	description: "stuurt dynmap link in embed",
	execute(message, args, Discord){
		const map = new Discord.MessageEmbed()
		.setColor('#e67e22')
		.setTitle('Hier is de Dynmap')
		.setURL('http://legendkingdoms.serv.nu:8123/')
		.setDescription('Alsjeblieft')
		.setFooter('Bot development by Frisian™#7989')

		message.channel.send(map);
	}
}