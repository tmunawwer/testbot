const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDU3NjIwNDY3NzA5MTE2NDU2.DgbwUw.7AQNTeFaXVJU73IKkKfv0js7N0I);
    //NDU3NjIwNDY3NzA5MTE2NDU2.DgbwUw.7AQNTeFaXVJU73IKkKfv0js7N0I);
