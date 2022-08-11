const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'about',
    description: '📑 About IVON!',
    run: async (client, interaction) => {
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
    let about = new MessageEmbed()
    .setAuthor({ 
          name: `About DIGO Giveaway`, 
          iconURL: client.user.displayAvatarURL() 
     })    
    .addField("Property of", "[Tech With Zaheer](https://rexdl.top/", true)
    .addField(
        "Partnered With",
        "[Astra Service](https://rexdl.top/)",
        true)
    .addField(
        "Hosted On",
        "[Digital Ocean](https://rexdl.top/",
        true)
    .setDescription(`DIGO Giveaway is a Discord giveaway bot that allows you to host giveaways on your servers without the need for an extra pair of hands. Unique role requirements, server join requirements, special role points, and many more options are included to help you save time and effectively run your giveaway.`)
    .setColor('#2F3136')
    .setTimestamp()
    .setThumbnail(process.env.THUMBNAIL)
    .setImage('https://i.ibb.co/4VJB3xY/Tech-With-Zahee-R.png')    
    .setFooter({
        text: `©️Tech With Zaheer`, 
        iconURL: (process.env.FOOTERIMG)
    })
    
    interaction.reply({ embeds: [about], components: [row]});
}
}