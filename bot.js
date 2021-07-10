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
  else if (msg.author.username == 'sla.von') {
    msg.send('🍅 <@254148566854008833>');
  }
if (msg.content === '!pomidor') {
    if (msg.author.username === 'MacGroundhog'
        || msg.author.username === 'Adam Higgs'){
     msg.channel.send('Ща закидаем этого засранца гнилыми помидорами!');
    for (let i = 0; i < 10; i++) { 
      msg.channel.send('🍅 <@254148566854008833>');
    }
    }
  }

if (msg.content === '!govno') {
    if (msg.author.username === 'MacGroundhog'
        || msg.author.username === 'Adam Higgs'){
     msg.channel.send('Надеваем перчатки и мажем его говном!!!');
    for (let i = 0; i < 10; i++) { 
      msg.channel.send('💩 <@254148566854008833>');
    }
    }
  }
});

client.login(process.env.BOT_TOKEN);
