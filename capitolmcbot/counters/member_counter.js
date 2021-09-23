module.exports = async (client) =>{
	const guild = client.guilds.cache.get('804432519188840468');
	setInterval(() =>{
		const memberCount = guild.memberCount;
		const channel = guild.channels.cache.get('847173618911543336');
		channel.setName(`Totaal Leden: ${memberCount.toLocaleString()}`);
		console.log('Updating memberCount');
	}, 900000);
}