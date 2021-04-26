const Discord = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['icon', 'pfp', 'pp'],
  description: 'Montre ton avatar ou celui de la personne que tu as mentionnée.',
  
  async execute(message, args) {
    let member = message.mentions.members.first();
    if(!member) member = message.author;
    let avatar = member.displayAvatarURL({size: 1024});
    
    let embed = new Discord.MessageEmbed()
      .setTitle(`Avatar de : ${member.username}`)
      .setImage(avatar)
      .setFooter('avatar')
      .setTimestamp()
    
    message.channel.send(embed);
  }
}