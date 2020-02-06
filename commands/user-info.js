module.exports = {
	name: 'user-info',
	description: 'Shows Your User Info.',
	execute(message, args) {
		RichEmbedMInfo.setAuthor(message.author.avatar, message.author.avatarURL)
			.addField('Username', message.member.id, true)
			.addField('User Created at', message.author.createdAt, true)
			.addField('User\'s Status', message.author.presence.status, true)
			.addBlankField()
			.addField('XPs', `${curxp}`, true)
			.addField('Level', `${curLvl}`, true)
			.addField('Next XPs to level up', `${curxp}/${nxtLvl}`);
		message.channel.send(RichEmbedMInfo);
		const RichEmbedMInfo = new Discord.RichEmbed()
			.setColor('#7289DA')
			.setTitle('User Info')
			.setDescription('This is an rich embed that has you user info.');
	},
};