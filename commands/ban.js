module.exports = {
	name: 'ban',
	description: 'Bans a member.',
	execute(message, args) {
		const user = message.mentions.users.first();
		if (user) {
			const member = message.guild.member(user);
			if (member) {
				if (args.length > 2) {
					args[2].replace(',', / +/);
					member.ban(args[2]).then(() => {
						message.reply(`Banned ${user.tag} for ` + args[2]);
					}).catch(err => {
						message.reply(`Can't ban ${user.tag}`);
						console.error(err);
					});
				}
				else {
					member.ban().then(() => {
						message.reply(`Banned ${user.tag}`);
					}).catch(err => {
						message.reply(`Can't ban ${user.tag}`);
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