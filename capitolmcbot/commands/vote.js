module.exports = {
	name: 'vote',
	description: "stuurt vote sites",
	execute(message, args, Discord){
		const vote = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('Hier zijn de vote sites')
		.setDescription(' ')
		.addFields(
			{name: 'https://minecraftservers.org/vote/610111', value: '.'},
			{name: 'https://minecraft-server-list.com/server/476015/vote/', value: '.'},
			{name: 'https://minecraft-mp.com/server-s293451', value: '.'},
		)
		.setFooter('Bot development by Frisian™#7989');

		message.channel.send(vote);
	} 
}