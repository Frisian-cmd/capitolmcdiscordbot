module.exports = {
	name: 'leave',
	description: "leave command for bot",
	async execute(message, args){
		const voiceChannel = message.member.voice.channel;

		if(!voiceChannel) return message.channel.send("Je moet in een spraak kanaal zijn om muziek te stoppen!");
		await voiceChannel.leave();
		await message.channel.send('Tot ziens! :wave:')

	}
}