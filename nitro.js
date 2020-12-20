const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Botunuzunİsmi`)
.setDescription(`


Nitromu İstiyorsun? UwU \n\n||Gerçekten Bu Komutun Nitro Vereceğini Sandıysan Helal Olsun :D||

`)
.setImage("https://cdn.discordapp.com/attachments/740871896614043669/748878433840398367/Baslksz-1.png")
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['Niro'], 
  permLevel: 0
};

exports.help = {
  name: "nitro",
  description: 'troll',
  usage: ''
};
