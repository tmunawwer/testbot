const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'm!test') {
    	message.reply('tested 1');
  	}
    if (message.content === 'm!help') {
    	message.reply(':V Lol under development');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NDU3NjIwNDY3NzA5MTE2NDU2.DgbwUw.7AQNTeFaXVJU73IKkKfv0js7N0I');
