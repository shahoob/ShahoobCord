module.exports = {
	name: 'beep',
	description: 'Same as the ping command.',
	execute(message, args) {
		message.channel.send('Boop.');
	},
};