const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix } = require('./config.json');
// eslint-disable-next-line no-unused-vars
const RichEmbedMInfo = new Discord.RichEmbed()
	.setColor('#7289DA')
	.setTitle('User Info')
	.setDescription('This is an rich embed that has you user info.');

client.once('ready', () => {
	console.log('ShahoobCord Is Online.');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(' ');
	if (message.content.startsWith === `${prefix}ping`) {
		message.channel.send('Pong.');
	}
	else if (message.content.startsWith === `${prefix}beep`) {
		message.channel.send('Boop.');
	}
	else if (message.content.startsWith === `${prefix}user-info`) {
		RichEmbedMInfo.setAuthor(message.author.avatar, message.author.avatarURL)
			.addField('Username', message.member.id, true)
			.addField('User Created at', message.author.createdAt, true)
			.addField('User\'s Status', message.author.presence.status, true);
		message.channel.send(RichEmbedMInfo);
		const RichEmbedMInfo = new Discord.RichEmbed()
			.setColor('#7289DA')
			.setTitle('User Info')
			.setDescription('This is an rich embed that has you user info.');
	}
	else if (message.content.startsWith === `${prefix}join-voice`) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join().then(connection => {
				message.reply('Ready to stream some audio!');
			});
		}
	}
});
client.login(process.env.BOT_TOKEN);