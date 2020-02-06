// You're on
//     _____ _           _                 _      _____              _
//    / ____| |         | |               | |    / ____|            | |'s
//   | (___ | |__   __ _| |__   ___   ___ | |__ | |     ___  _ __ __| |
//    \___ \| '_ \ / _` | '_ \ / _ \ / _ \| '_ \| |    / _ \| '__/ _` |
//    ____) | | | | (_| | | | | (_) | (_) | |_) | |___| (_) | | | (_| |
//   |_____/|_| |_|\__,_|_| |_|\___/ \___/|_.__/ \_____\___/|_|  \__,_|
//
//   Main bot file. if you mess it up, that's it, ded 4ever
//   jk, your bot might stop working. You can restore some
//   of it, from the github repo. https://github.com/shahoob/ShahoobCord
//
//   Copyright Shehab Tweel 2009 - 2019


const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();

let rewardLvlUp;

client.commands = new Discord.Collection();
const { prefix, path } = require('./config.json');
// eslint-disable-next-line no-unused-vars
const { level } = require(`${path.JSON.rewards}`);
const xp = require(`${path.JSON.xp}`);
// eslint-disable-next-line no-unused-vars
const RichEmbedMInfo = new Discord.RichEmbed()
	.setColor('#7289DA')
	.setTitle('User Info')
	.setDescription('This is an rich embed that has you user info.');


const commandFiles = fs.readdirSync(`${path.commands}`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	console.log(`Load Command: ${file}`);
	client.commands.set(command.name, command);
	console.log(`Command Ready: ${file}`);
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
	else if (message.content.startsWith === `${prefix}ban`) {
		client.commands.get('ban').exeute(message, args);
	}
	else if (message.content.startsWith === `${prefix}help`) {
		client.commands.get('help').exeute(message, args);
	}
	else if (message.content.startsWith === `${prefix}level`) {
		client.commands.get('level').execute(message, args, curLvl, nxtLvl);
	}

	const xpAdd = Math.floor(Math.random() * Math.random(10)) + Math.random(8);

	if (!xp[message.author.id]) {
		console.log(`ID, ${message.author.id}, Is not on the xp database. Creating...`);
		xp[message.author.id] = {
			xp: 0,
			level: 1,
		};
	}

	const curxp = xp[message.author.id].xp;
	const curLvl = xp[message.author.id].level;
	const nxtLvl = xp[message.author.id].level * 10;
	xp[message.author.id].xp = curxp + xpAdd;
	// eslint-disable-next-line no-unused-vars
	const thekiddoRole = message.guild.roles.find(r => r.name === 'the-kiddo');
	const neatHoomanRole = message.guild.roles.find(r => r.name === 'neat-hooman');
	const tooLuckyRole = message.guild.roles.find(r => r.name === 'too-lucky');
	const superWahRole = message.guild.roles.find(r => r.name === 'super-wah');
	const tooMuchWahsRole = message.guild.roles.find(r => r.name === 'too-much-wahs');
	const theGodRole = message.guild.roles.find(r => r.name === 'the-god');
	switch (curLvl) {
	case 2:
		// eslint-disable-next-line no-undef
		message.member.addRole(theKiddoRole);
		rewardLvlUp = 'the-kiddo';
		break;
	case 3:
		message.member.addRole(neatHoomanRole);
		rewardLvlUp = 'neat-hooman';
		break;
	case 4:
		message.member.addRole(tooLuckyRole);
		rewardLvlUp = 'too-lucky';
		break;
	case 5:
		message.member.addRole(superWahRole);
		rewardLvlUp = 'super-wah';
		break;
	case 6:
		message.member.addRole(tooMuchWahsRole);
		rewardLvlUp = 'too-much-wahs';
		break;
	case 10:
		message.member.addRole(theGodRole);
		rewardLvlUp = 'the-god';
	}
	if (nxtLvl <= xp[message.author.id].xp) {
		const lvlup = new Discord.RichEmbed()
			.setTitle('Level Up!')
			.setAuthor(message.author.username, message.author.avatarURL)
			.setDescription(`${message.author.username} leved up!`)
			.addField('New Level', `${curLvl}`, true)
			.addField('XPs', `${curxp}`, true)
			.addField('Next XPs To level up', `${curLvl}/${nxtLvl}`, true)
			.setTimestamp()
			.addField('Rewards', `@${rewardLvlUp}`, true);

		message.reply(lvlup);
	}

	fs.writeFile(`${path.commands}`, JSON.stringify(xp), (err) => {if (err) console.error(err);});
});

client.on('error', (error) => {
	console.error(error);
});

client.on('reconnecting', () => {
	console.log('Reconnecting...');
});

client.on('disconnect', () => {
	console.log('ShahoobCord Had an disconnection. It will re-login to reconnect.');
	console.warn('if that goes forever, stop it, then restart it.');
	client.login(process.env.BOT_TOKEN);
});

console.log(fs.readFileSync('./logo.txt'), 'Logging in...');

client.login(process.env.BOT_TOKEN);