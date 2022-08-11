const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

const embed = new MessageEmbed()
.setTitle(`Commands of ${client.user.username}`)
.setColor('#e7ceff')
.setImage("https://i.ibb.co/xftVhpk/DGH.png")
.setThumbnail(process.env.THUMBNAIL)
.setDescription('**Please Select a category to view all its commands**')
.setTimestamp()
.setFooter({
        text: `©️ DIGO`, 
        iconURL: (process.env.FOOTERIMG)
    });

  const giveaway = new MessageEmbed()
  .setTitle("Categories » Giveaway")
  .setColor('#2F3136')
  .setDescription("```yaml\n All the giveaway command are Slash Command based:```")
  .addFields(
    { name: 'Create / Start'  , value: `Start a giveaway in your guild!\n > **Types: \`/start\`**`, inline: true },
    { name: 'Edit' , value: `Edit an already running giveaway!\n > **Types: \`/edit\`**`, inline: true },
    { name: 'End' , value: `End an already running giveaway!\n > **Types: \`/end\`**`, inline: true },
    { name: 'Pause' , value: `Pause an already running giveaway!\n > **Type: \`/pause\`**`, inline: true },
    { name: 'Reroll' , value: `Reroll an ended giveaway!\n > **Types: \`/reroll\`**`, inline: true },
    { name: 'Resume' , value: `Resume a paused giveaway!\n > **Type: \`/resume\`**`, inline: true },
  )
  .setTimestamp()
  .setFooter({
        text: `©️ DIGO`, 
        iconURL: (process.env.FOOTERIMG)
    });

  const general = new MessageEmbed()
  .setTitle("Categories » General")
  .setColor('#2F3136')
  .setDescription("```yaml\nHere are the general bot commands:```")
  .addFields(
    { name: 'Help'  , value: `Show the help menu.\n > **Types: \`-help\`**`, inline: true },
    { name: 'About'  , value: `Show About Ivon.\n > **Types: \`-about\`**`, inline: true },
    { name: 'Invite' , value: `Get the bot's invite link.\n > **Types: \`-invite\`**`, inline: true },
    { name: 'Ping' , value: `Check the bot's ping!\n > **Types: \`-ping\` **`, inline: true },
    { name: 'Info' , value: `Check the bot's System info.\n > **Types: \`-info\` **`, inline: true },
    { name: 'Server Info', value: `Shows server info.\n > **Types: \`/serverinfo\`**`, inline: true },
    { name: 'User Info', value: `Shows user info.\n > **Types: \`/userinfo\`**`, inline: true },
  )
  .setTimestamp()
  .setFooter({
        text: `©️ IVON`, 
        iconURL: (process.env.FOOTERIMG)
    });
  
  const components = (state) => [
    new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId("help-menu")
        .setPlaceholder("Please Select a Category")
        .setDisabled(state)
        .addOptions([{
                label: `Giveaways`,
                value: `giveaway`,
                description: `View all the giveaway based commands!`,
                emoji: `🎉`
            },
            {
                label: `General`,
                value: `general`,
                description: `View all the general bot commands!`,
                emoji: `🎉`
            }
        ])
    ),
];

const initialMessage = await message.reply({ embeds: [embed], components: components(false) });

const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector(
            {
                filter,
                componentType: "SELECT_MENU",
                idle: 300000,
                dispose: true,
            });

        collector.on('collect', (interaction) => {
            if (interaction.values[0] === "giveaway") {
                interaction.update({ embeds: [giveaway], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "general") {
                interaction.update({ embeds: [general], components: components(false) }).catch((e) => {});
            }
        });
        collector.on("end", (collected, reason) => {
            if (reason == "time") {
                initialMessage.edit({
                   content: "Collector Destroyed, Try Again!",
                   components: [],
                });
             }
        });
}