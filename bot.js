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
 else if (msg.author.username === 'Adam Higgs' || msg.author.username === 'MacGroundhog') {
    if (msg.content === '!pomidor'){
     msg.send('Ща закидаем этого засранца гнилыми помидорами!');
     msg.send('🍅 <@254148566854008833>');
     msg.send('🍅 <@254148566854008833>');
     msg.send('🍅 <@254148566854008833>');
     msg.send('🍅 <@254148566854008833>');
     msg.send('🍅 <@254148566854008833>');
     msg.send('🍅 <@254148566854008833>');
     msg.send('🍅 <@254148566854008833>');
    }
  }
});

client.login(process.env.BOT_TOKEN);
