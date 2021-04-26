const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'blush',
  aliases: ['rougir'],
  description: 'Rougissez, parce que vous êtes gêné(e) >///<',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/blush`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} rougit à cause de ${member.displayName}`)
      .setImage(body.url)
      .setFooter('blush')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}
