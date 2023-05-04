const client = require("../../index");

const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');
const react = new Collection();
module.exports = react;

let reactid = ["1087947518446419988"];

client.on("messageCreate", message => {
 if(message.channel.type === "dm" || 
  message.author.bot) return
  
if(reactid.includes(message.channel.id)){
        message.react("<:emoji_5:1087547654323581068>")
        message.react(":flushed_pepe:1100918594235277342")
   }
});