const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const { prefix } = require('./config.json');
// eslint-disable-next-line no-unused-vars
const RichEmbedMInfo = new Discord.RichEmbed()
	.setColor('#7289DA')
	.setTitle('User Info')
	.setDescription('This is an rich embed that has you user info.');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('ShahoobCord Is Online.');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	if (message.content.startsWith === `${prefix}ping`) {
		client.commands.get('ping').exeute(message, args);
	}
	else if (message.content.startsWith === `${prefix}beep`) {
		client.commands.get('beep').exeute(message, args);
	}
	else if (message.content.startsWith === `${prefix}user-info`) {
		client.commands.get('user-info').exeute(message, args);
	}
	else if (message.content.startsWith === `${prefix}join-voice`) {
		client.commands.get('join-voice').exeute(message, args);
	}
	else if (message.content.startsWith === `${prefix}kick`) {
		client.commands.get('kick').exeute(message, args);
	}
});
client.login(process.env.BOT_TOKEN);