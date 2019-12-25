module.exports = {
	name: 'ping',
	description: 'Pings the user and ShahoobCord. Used to test if the bot is working',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};