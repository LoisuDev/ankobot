
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: 'pat',
  description: 'Wait, is this legal ?',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    let { body } = await superagent.get(`https://shiro.gg/api/images/pat`);
    if(!member) return message.channel.send(body.url);
    
    let hug_embed = new Discord.MessageEmbed()
      .setColor('e410d3')
      .setTitle(`${message.author.username} tapote le front de ${member.displayName}`)
      .setImage(body.url)
      .setFooter('pat')
      .setTimestamp()
    message.channel.send(hug_embed);
  }
}