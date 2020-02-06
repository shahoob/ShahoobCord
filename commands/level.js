module.exports = {
	name: 'level',
	description: 'Shows your current level info.',
	usage: '[command name]',
	exeute(message, args, curLvl, nxtLvl) {
		let lvlEmbed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.addField('Level', curLvl, true)
			.addField('XPs', curLvl)
			.addField('Next XPs To level up', `${curLvl}/${nxtLvl}`, true);
	},
}