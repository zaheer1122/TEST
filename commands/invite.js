const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel(`Website`)
      .setStyle('LINK')
      .setEmoji('984296691794583582')
      .setURL(`https://rexdl.top/`),
    new MessageButton()
      .setLabel('Patreon')
      .setStyle('LINK')
      .setEmoji('981525828196257813')
      .setURL(`https://www.patreon.com/user?u=47561905`),
    new MessageButton()
      .setLabel('Invite')
      .setStyle('LINK')
      .setEmoji('966345633411768381')
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=1007283293114351648&permissions=406881561681&scope=bot%20applications.commands`),
  )
    let invite = new MessageEmbed()
     .setAuthor({ 
          name: `Invite ${client.user.username}`, 
          iconURL: client.user.displayAvatarURL() 
     })  
    .setTitle("Invite & Support Link!")
    .setDescription(`Invite ${client.user} to your server today and host seamless giveaways in your server!`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    })
    message.reply({ embeds: [invite], components: [row]});
}
