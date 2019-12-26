module.exports = {
	name: 'kick',
	description: 'Kicks a member.',
	usage: '[command name] [mention name] <reason (to insert spaces, use \',\'\')>',
	execute(message, args) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				if (args.length > 2) {
					args[2].replace(',', / +/);
					member.kick(args[2]).then(() => {
						message.reply(`Kicked ${user.tag} for ` + args[2]);
					}).catch(err => {
						message.reply(`Can't kick ${user.tag}`);
						console.error(err);
					});
				}
				else {
					member.kick().then(() => {
						message.reply(`Kicked ${user.tag}`);
					}).catch(err => {
						message.reply(`Can't kick ${user.tag}`);
						console.error(err);
					});
				}

			}
			else {
				message.reply('Hmmm. The user isn\'t in this guild.');
			}
		}
		else {
			message.reply('Where\'s the mention?\nYou didn\'t mention that!');
		}
	},
};