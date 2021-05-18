module.exports = {
	name: 'ban',
	description: "bans members",
	execute(message, args){
		const member = message.mentions.users.first();
		if(member){
			const memberTarger = message.guild.members.cache.get(member.id);
			memberTarger.ban();
			message.channel.send("User has been banned");
		}else{
			message.channel.send('you cant ban that user')
		}
	}
}