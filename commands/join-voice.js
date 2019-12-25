module.exports = {
	name: 'join-voice',
	description: 'Joins at voice channel you\'re on.',
	execute(message, args) {
		if (message.member.voiceChannel) {
			message.member.voiceChannel.join().then(connection => {
				message.reply('Ready to stream some audio!');
			});
		}
		else {
			message.reply('Join a voice channel first!');
		}
	},
};