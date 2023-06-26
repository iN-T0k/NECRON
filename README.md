const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

const moment = require('moment');
const axios = require('axios');

module.exports = {
    name: "user",
    description: `Displays information about yourself or another user, such as ID and join date.`,
    aliases: [],
    run: async (client,message, args) => {
      
     const member = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.get(args[0]) || message.author;
  

   const status = {
online: 'Online',
offline: 'Offline',
idle: 'Idle',
dnd: 'Dnd'
      };

      let button = new MessageActionRow()
      .addComponents(
            new MessageButton()
      .setStyle('LINK')
      .setLabel('Profile')
      .setURL(`https://discord.com/users/${member.id}`))
  
      
  let embed = new MessageEmbed()

   .addFields({name: `Username :`, value: `${member.username}`, inline: true})
  
         .addFields({name: `Tag :`, value: `${member.discriminator}`, inline: true})

    
     .addFields({name: `User id :`, value: `${member.id}`, inline: true})

 .addFields({name: `Nickname :`, value: message.guild.members.cache.find(e => e.id == member.id).nickname ? message.guild.members.cache.find(e => e.id == member.id).nickname : member.username, inline: true})
    
     .addFields({name: `Bot :`, value: member.bot ? 'true' : 'false', inline: true})

.addFields({name: `States :`, value: status[message.guild.members.cache.find(e => e.id == member.id).presence?.status || 'offline'], inline: true})

.addFields({name: `Joined Discord :`, value: `${moment(member.createdAt).toString().substr(0, 15)} | ${moment(member.createdAt).fromNow()}`, inline: true})

.addFields({name: `Joined Server :`,value: `${moment(member.joinedAt).toString().substr(0, 15)} |  ${moment(member.joinedAt).fromNow()}`, inline: true})
        
.setColor(message.guild.me.displayColor) 
  .setAuthor(`${member.tag}`, member.displayAvatarURL({dynamic:true}))
    .setThumbnail(member.displayAvatarURL({dynamic:true}))
    
.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
      
    message.reply({ embeds: [embed], components: [button] }).catch((err) => {
                                                console.log(`i couldn't reply to the message: ` + err.message)
                                        })
        
    },
};
