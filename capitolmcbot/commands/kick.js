module.exports = {
	name: 'kick',
	description: "kicks members",
	execute(message, args){
		const member = message.mentions.users.first();
		if(member){
			const memberTarger = message.guild.members.cache.get(member.id);
			memberTarger.kick();
			message.channel.send("User has been kicked");
		}else{
			message.channel.send('you cant kick that member')
		}
	}
}