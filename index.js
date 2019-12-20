const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');

client.once('ready', () => {
	console.log('ShahoobCord Is Online.');
});

client.on('message', message => {
	if (message.content.startsWith === `${prefix}ping`) {
		message.channel.send('Pong.');
	}
	else if (message.content.startsWith === `${prefix}beep`) {
		message.channel.send('Boop.');
	}
});
client.login(process.env.BOT_TOKEN);