const Discord = require('discord.js');
const client = new Discord.Client();
let config = require("./boot-config.json");
let token = config.token;
let prefix = config.prefix;

client.on('ready', () => {
  console.log(`Брат, я на месте!`);
});

client.on('message', msg => {
  if (msg.author.username == 'MacGroundhog') {
    msg.react('🍌');
  }
});

  if (msg.content === '>drop_warn') {
    msg.send('pong');
  }

client.login(process.env.BOT_TOKEN);
