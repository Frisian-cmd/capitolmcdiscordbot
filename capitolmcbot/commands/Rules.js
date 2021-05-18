module.exports = {
	name: 'Rules',
	description: "regels embed",
	execute(message, args, Discord){
		const Regels = new Discord.MessageEmbed()
		.setColor('#e67e22')
		.setTitle('De regels!')
		.setURL('https://discord.com/terms')
		.setDescription('Goed doorlezen!')
		.addFields(
			{name: 'Regel 1.1', value: 'Je behandelt elkaar zoals hoe je zelf ook behandelt wilt worden. Je behandelt elkaar dus met RESPECT.'},
			{name: 'Regel 1.2', value: 'Discriminatie is in onze server ten strengste verboden! Jongens/meisjes, Oud/Jong, Blank/Donker iedereen verdiend gelijkwaardig behandelt te worden.'},
			{name: 'Regel 1.3', value: 'In deze server is het NIET toegestaan te handelen/verkopen van producten of diensten.'},
			{name: 'Regel 1.4', value: 'Spammen is niet toegestaan in onze server. Doe dit dus ook zeker NIET!'},
			{name: 'Regel 1.5', value: 'Leden dienen alleen te chatten in de daarvoor bestemde kanalen.'},
			{name: 'Regel 1.6', value: 'Het bedreigen en/of pesten van andere leden is NIET toegestaan.'},
			{name: 'Regel 1.7', value: 'Onze bel-kanalen zijn bedoeld voor gezellig kletsen met elkaar via de microfoon, ook tellen hier de regels 1, 2, 3, 4 & 6.'},
			{name: 'Regel 1.8', value: 'Het adverteren + het plaatsen van linkjes is NIET toegestaan! Zowel in de server als in Privé van onze server leden.'},
			{name: 'Regel 2.1', value: 'Staff heeft altijd gelijk!'},
			{name: 'Regel 2.2', value: 'Ben je het niet met een stafflid eens? Spreek hem / haar aan in privé! Benader hem of haar NIET in de server.'},
			{name: 'Regel 2.3', value: 'Uitlokkend gedrag naar staffleden word bestraft met een mute / ban.'},
			{name: 'Regel 2.4', value: "Sexuele gesprekken / foto's in het kanaal sturen waarvoor het bedoelt is. Doe je dit niet? Zal dit streng bestraft worden."},
			{name: 'Regel 2.5', value: "Dreigen/leaken van persoonsgegevens is instant ban en ook nooit meer welkom!"},
			{name: 'Regel 3.1', value: 'Bij deelname aan deze server ga je akkoord aan de Terms of Service van Discord (klik op: De Regels!)'},
			{name: 'Houd jij je niet aan onze regels, dan zullen er direct consequenties volgen gebaseerd op de ernst van het overtreden!', value: 'Wees gewaarschuwed...'},

		)
		.setImage('')
		.setFooter('Bot development by Frisian™#7989');

		if(message.member.roles.cache.has('815701063646576660')){			//works thanks to @Slux#9357
			message.channel.send(Regels);
		}else if(message.member.roles.cache.has('815958489142263818')){
			message.channel.send(Regels);
		}else if(message.member.roles.cache.has('815697197634420787')){
			message.channel.send(Regels);
		}else if(message.member.roles.cache.has('815696743769440346')){
			message.channel.send(Regels);
		}else{
			message.channel.send('Sorry, je kan dit niet gebruiken.');
		}
	}	
}