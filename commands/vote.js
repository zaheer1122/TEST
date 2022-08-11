const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel(`Vote on Discord Bot List`)
        .setStyle('LINK')
        .setEmoji('974160940197113916')
        .setURL(`#`),
        new MessageButton()
        .setLabel('Invite DIGO')
        .setStyle('LINK')
        .setEmoji('973537545289875486')
        .setURL(`https://discord.com/oauth2/authorize?client_id=1007283293114351648&permissions=406881561681&scope=bot%20applications.commands`),
    )
    let invite = new MessageEmbed()
     .setAuthor({ 
          name: `${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
     })  
    .setTitle("Vote for **DIGO*")
    .setDescription(`Vote for **${client.user}** on [discordbotlist.com](https://discordbotlist.com). Your siple vote help us to grow more and more.`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setImage(process.env.DCBL)
    .setFooter({
        text: `©️ DIGO`, 
        iconURL: (process.env.FOOTERIMG)
    })
    message.reply({ embeds: [invite], components: [row]});
}