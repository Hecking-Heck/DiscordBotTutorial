const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'tb.ping') {
    msg.reply('pong');
  }
  if (msg.content === 'tb.hello') {
    msg.channel.send('Hello there!');
  }
  if (msg.content === 'tb.pic') {
    msg.channel.send(msg.author.avatarURL());
  }
});

client.login('token');