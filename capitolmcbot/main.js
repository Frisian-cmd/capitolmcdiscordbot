const Discord = require('discord.js');
const botConfig = require("./botconfig.json");
const client = new Discord.Client();
const fs = require('fs');
const memberCounter = require('./counters/member_counter');


client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
	}

client.on('ready', () => {
	console.log('Ohayo senpai');
	client.user.setActivity('legendkingdoms.serv.nu', { type: "PLAYING" }).catch(console.error)
	memberCounter(client);
});

client.on('guildMemberAdd', guildMember => {
	let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '🎮 | Member');

	guildMember.roles.add(welcomeRole);
	guildMember.guild.channels.cache.get('815602992342106143').send(`Welkom <@${guildMember.user.id}> bij de officiële server van LegendKingdoms! Voor dat je gaat deelnemen in gesprekken lees de regels in <#815609630235426836> `)
});

client.on('message', message =>{

	if(message.author.bot) return;

	var prefix =botConfig.prefix;

	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ip'){
		client.commands.get('ip').execute(message, args);
}	else if(command === 'server'){
		client.commands.get('ip').execute(message, args);	
}	else if(command === 'web'){
		client.commands.get('website').execute(message, args);
}	else if(command === 'site'){
		client.commands.get('website').execute(message, args);
}	else if(command === 'website'){
		client.commands.get('website').execute(message, args);
//}	else if(command === 'regels_embed'){
//		client.commands.get('Rules').execute(message, args, Discord);
//}	else if(command == 'clear'){
//		if(message.member.roles.cache.has('817144461687521281')){
//			client.commands.get('clear').execute(message, args);
//		}else{
	//		return message.reply(' het spijt me. U heeft op dit moment niet toegang tot het gebruiken van het commando waar het verwijderen van berichten zit aan gekoppeld. Gegroet.');
//		}
//}	else if(command == 'ban'){
//		if(message.member.roles.cache.has('817144461687521281')){
//			client.commands.get('ban').execute(message, args);
//		}else{
			return message.reply('het spijt me. U heeft op dit moment niet toegang tot het gebruiken van het commando waar het verbannen van gebruikers zit aan gekoppeld. Gegroet.');
//		}
//}	else if(command =='kick'){
//		if(message.member.roles.cache.has('817144461687521281')){
//			client.commands.get('kick').execute(message, args);
//		}else{
//			return message.reply('het spijt me. U heeft op dit moment niet toegang tot het gebruiken van het commando waar het kicken van gebruikers zit aan gekoppeld. Gegroet.');
		}
//}	else if(command == 'mute'){
//		if(message.member.roles.cache.has('817144461687521281')){
//		client.commands.get('mute').execute(message, args);
//		}else{
//			return message.reply('jij mag dit niet gebruiken. ik ga het tegen mama zeggen :angry:');
//		}
//}	else if(command == 'unmute'){
//		if(message.member.roles.cache.has('817144461687521281')){
//		client.commands.get('unmute').execute(message, args);
//		}else{
//		return message.reply('jij mag dit niet gebruiken! *huilgeluiden* IK GA HET NU TEGEN MAMMIE EN PAPPIE ZEGGUN!');
	//	}
}	else if(command == 'map'){
		client.commands.get('map').execute(message, args, Discord);
}	else if(command == 'dynmap'){
		client.commands.get('dynmap').execute(message, args, Discord);
}	else if(command == 'image'){
		client.commands.get('image').execute(client, message, args);
}	else if(command == 'afbeelding'){
		client.commands.get('image').execute(client, message, args);
//}	else if(command == 'vote'){
	//	client.commands.get('vote').execute(message, args, Discord);
}	else if(command == 'help'){
		client.commands.get('help').execute(message, args, Discord);
}	else if(command == 'commands'){
		client.commands.get('help').execute(message, args, Discord);
}	else if(command == 'command'){
		client.commands.get('help').execute(message, args, Discord);
}	//else if(command == 'play'){
//		client.commands.get('play').execute(message, args);
//}//	else if(command == 'leave'){
	//	client.commands.get('leave').execute(message, args);
//}//	else if(command == 'stop'){
	//	client.commands.get('leave').execute(message, args);
//}//	else if(command == 'disconnect'){
//		client.commands.get('leave').execute(message, args);
//}//	else if(command == 'fuckoff'){
	//	client.commands.get('leave').execute(message, args);
//}	//else if(command == 'bye'){
		//client.commands.get('leave').execute(message, args);
//}
});

client.login(process.env.token);