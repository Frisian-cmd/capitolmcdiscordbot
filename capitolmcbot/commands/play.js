const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
	name: 'play',
	description: "the join and play thing",
	async execute(message, args){
		const voiceChannel = message.member.voice.channel;
		
		if(!voiceChannel) return message.channel.send('Je moet in een spraak kanaal zijn om dit commando uit te voeren!');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if(!permissions.has('CONNECT')) return message.channel.send('Je hebt niet de juiste machtiging!');
		if(!permissions.has('SPEAK')) return message.channel.send('Je hebt niet de juiste machtiging!');
		if(!args.length) return message.channel.send('Je mist het tweede stukje commando!');

		const validURL = (str) => {
			var regex = /(http|https)\/\/(\w+;{0,1}\w*)?(\S+)(;[0-9]+)?(\/\/([\w#!:.?+=&%!\-\/]))?/;
			if(!regex.test(str)){
				return false;
			}else{
				return true;
			}
		}

		if(validURL(args[0])){
			const connection = await voiceChannel.join();
			const stream = ytdl(args[0], {filter: 'audioonly'});

			connection.play(stream, {seek: 0, volume: 1})
			.on('finish', () =>{
				voiceChannel.leave();
				message.channel.send('Het muziekje is afgelopen! Gegroet! :wave:');
			});

			await message.reply(`:thumbsup: ***Jouw Link!***`)

			return
		}
	
		const connection = await voiceChannel.join();

		const videoFinder = async (query) => {
			const videoResult = await ytSearch(query);

			return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

		}

		const video = await videoFinder(args.join(' '));

		if(video){
			const stream = ytdl(video.url, {filter: 'audioonly'});
			connection.play(stream, {seek: 0, volume: 1})
			.on('finish', () =>{
				voiceChannel.leave();
			});

			await message.reply(`:thumbsup: Wordt nu afgespeeld ***${video.title}***`)
			}else{
				message.channel.send('Geen resultaten gevonden.');
		
		}
	}
}