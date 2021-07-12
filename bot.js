const Discord = require('discord.js');
const client = new Discord.Client();
let config = require("./boot-config.json");
let token = config.token;
let prefix = config.prefix;

client.on('ready', () => {
  console.log(`Брат, я на месте!`);
});

bot.on('guildMemberAdd', function (member) {
  const channel = guild.channels.cache.get('745641675736481874');
  if (!channel) return;
  channel.send(`${member}, такс бутылочку я приготовил!`);
})

client.on('message', msg => {
  if (msg.author.username == 'MacGroundhog') {
    msg.react('🍌');
  }
  else if (msg.author.username == 'slavon') {
    msg.react('863394774752428072');
  }
  else if (msg.author.username == 'Михалыч') {
    msg.react('863400783344041985');
  }
  else if (msg.author.username == 'Белка') {
    msg.react('863400130610593813');
  }
  else if (msg.author.username == 'Сутулый') {
    msg.react('863402540082528257');
  }
  else if (msg.author.username == 'Adam Higgs') {
    msg.react('863402971818754068');
  }
if (msg.content === '!pomidor') {
    if (msg.author.username === 'MacGroundhog'
        || msg.author.username === 'Adam Higgs'){
     msg.channel.send('Ща закидаем этого засранца гнилыми помидорами!');
    for (let i = 0; i < 5; i++) { 
      msg.channel.send('🍅 <@254148566854008833>');
    }
    }
  }

if (msg.content === '!govno') {
    if (msg.author.username === 'MacGroundhog'
        || msg.author.username === 'Adam Higgs'
       || msg.author.username === 'slavon'){
     msg.channel.send('Надеваем перчатки и мажем его говном!!!');
    for (let i = 0; i < 5; i++) { 
      msg.channel.send('💩 <@254148566854008833>');
    }
    }
  }
});

client.login(process.env.BOT_TOKEN);
