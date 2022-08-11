const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        components: [new MessageActionRow()
                    .addComponents(
                          new MessageButton()
                      .setLabel("Jump to the Giveaway")
                      .setStyle("LINK")
                      .setURL(`https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId}`)
                      .setEmoji('973495590921043968'),
                    new MessageButton()
                      .setLabel("Join our server")
                      .setStyle("LINK")
                      .setURL("https://disboard.org/server/952279318946512926")
                      .setEmoji('974160940197113916'),
                          new MessageButton()
                      .setLabel("Invite Me")
                      .setStyle("LINK")
                      .setURL("https://discord.com/oauth2/authorize?client_id=1007283293114351648&permissions=406881561681&scope=bot%20applications.commands")
                      .setEmoji('984296691794583582'))],
        embeds: [new MessageEmbed()
          .setAuthor({name: "Congratulations!", iconURL: (process.env.THUMBNAIL)})
          .setThumbnail(process.env.THUMBNAIL)
          .setColor("#2F3136")
          .setDescription(`Hello there ${member.user}\n Host of the giveaway rerolled and you have won the Giveaway on **[This Server](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\nGood Job On Winning **${giveaway.prize}!**\n DM ${giveaway.hostedBy} to claim your prize!!`)
          .setTimestamp()
          .setFooter({
            text: "©️ IVON", 
            iconURL: (process.env.FOOTERIMG)
          })
        ]
      }).catch(e => {})
    });
  }
}
