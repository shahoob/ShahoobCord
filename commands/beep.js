module.exports = {
	name: 'beep',
	description: 'Same as the ping command.',
	usage: '[command name]',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};