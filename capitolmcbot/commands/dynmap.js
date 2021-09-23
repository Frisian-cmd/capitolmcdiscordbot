module.exports = {
	name: 'dynmap',
	description: "dynmap",
	execute(message, args, Discord){
		const map = new Discord.MessageEmbed()
		.setColor('#e67e22')
		.setTitle('Hier is de map')
		.setURL('http://legendkingdoms.serv.nu:65535/')
		.setDescription('Alsjeblieft')
		.setFooter('Bot development by Frisian™#7989')

		message.channel.send(map);
	}
}