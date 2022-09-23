const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
const player = require('play-sound')(opts = {})
client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
client.on('messageCreate', async message => {
	if (message.channel.id !== "741978466890809345") {
		return
	}
	if (message.member.roles.cache.has("218109278379180032")) {
		return
	}
	if (message.author.bot === true) {
		return
	}
	if (message.content.match((/\bwho\b/) || (/\bwho\?\b/) || (/\bWho\b/) || (/\bWho\?\b/) || (/\bWho.\b/) || (/\bwho.\b/) || (/\baskers\b/) || (/\baskers\?\b/) || (/\bAskers\b/) || (/\baskers\b/))) {
		message.member.timeout(60 * 1000, 'Dont who people cunt')
	}
});


client.login(token);


