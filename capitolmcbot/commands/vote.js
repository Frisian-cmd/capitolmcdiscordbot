module.exports = {
	name: 'vote',
	description: "stuurt vote sites",
	execute(message, args, Discord){
		const vote = new Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTitle('Hier zijn de vote sites')
		.setDescription(' ')
		.addFields(
			{name: 'https://www.minecraftkrant.nl/serverlijst/legendkingdoms', value: '.'},
			{name : 'http://minecraftservers.org/vote/610111', value: '.'},
			{name : 'https://minecraftlist.org/vote/22353', value: '.'},
			{name : 'https://minecraft-server-list.com/server/476015/vote/', value: '.'},
			{name : 'http://minecraft-mp.com/server/282221/vote/', value: '.'},
		)
		.setFooter('Bot development by Frisian™#7989');

		message.channel.send(vote);
	} 
}