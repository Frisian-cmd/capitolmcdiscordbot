  module.exports = {
	name: 'clear',
	description: "does clear",
	async execute(message, args){
			if(!args[0]) return message.reply("Specify a number of messages you want to clear");
			if(isNaN(args[0])) return message.reply("enter a real number");

			if(args[0] > 100)	return message.reply("thats over the max of 100");
			if(args[0] < 1) return message.reply("the number must be higher 1");
			
			await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
			message.channel.bulkDelete(messages);
	 		});
	}
}