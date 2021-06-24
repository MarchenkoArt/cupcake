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
  else if (msg.author.username == 'slavon') {
    msg.react('🍆');
    msg.react('🔙');
    msg.react('🏳️‍🌈');
  }
});

client.login(process.env.BOT_TOKEN);
