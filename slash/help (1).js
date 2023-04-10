const { MessageEmbed , MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
    name: 'help',
    description: '📜 View all the commands available to the bot!',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle(`Commands of ${client.user.username}`)
        .setColor('#00FFFF')
        .setDescription('**Please Select a category to view all its commands**')
        .addField(`Links:`,` [Support Server](https://discord.gg/WsurVjRMcx)`,true)
        .setTimestamp()
        .setFooter(`Requested by ${interaction.user.username} | Electrix Giveaway`, interaction.user.displayAvatarURL());
        
          const giveaway = new MessageEmbed()
          .setTitle("Categories » Giveaway")
          .setColor('#00FFFF')
          .setDescription("```yaml\nHere are the giveaway commands:```")
          .addFields(
            { name: 'Start'  , value: `Start a giveaway in your guild!\n  `, inline: true },
            { name: 'End' , value: `End an already running giveaway!\n`, inline: true },
            { name: 'List' , value: `List all the giveaways running within this guild!\n `, inline: true },
            { name: 'Pause' , value: `Pause an already running giveaway!\n `, inline: true },
            { name: 'Reroll' , value: `Reroll an ended giveaway!\n `, inline: true },
            { name: 'Resume' , value: `Resume a paused giveaway!\n  `, inline: true },
          )
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username} | Electrix Giveaway`, interaction.user.displayAvatarURL());
        
        
          const general = new MessageEmbed()
          .setTitle("Categories » General")
          .setColor('#00FFFF')
          .setDescription("```yaml\nHere are the general bot commands:```")
          .addFields(
            { name: 'Help'  , value: `Shows all available commands to this bot!\n `, inline: true },
            { name: 'Invite' , value: `Get the bot's invite link!\n `, inline: true },
            { name: 'Ping' , value: `Check the bot's websocket latency!\n`, inline: true },
            { name: 'About'  , value: `All the informations about Electrix Giveaway.\n `, inline: true },
            { name: 'Vote'  , value: `Vote for Electrix Giveaway.\n`, inline: true },
            { name: 'Sponsor'  , value: `The Sponsor of Electrix Giveaway!\n `, inline: true },
          )
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());
        
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
                        emoji: `<a:TadaYellow:906173335824650301>`
                    },
                    {
                        label: `General`,
                        value: `general`,
                        description: `View all the general bot commands!`,
                        emoji: `<a:settings:906173487121563711>`
                    }
                ])
            ),
        ];
        
        const initialMessage = await interaction.reply({ embeds: [embed], components: components(false) });
        
        const filter = (interaction) => interaction.user.id === interaction.member.id;
        
                const collector = interaction.channel.createMessageComponentCollector(
                    {
                        filter,
                        componentType: "SELECT_MENU",
                        time: 300000
                    });
        
                collector.on('collect', (interaction) => {
                    if (interaction.values[0] === "giveaway") {
                        interaction.update({ embeds: [giveaway], components: components(false) });
                    } else if (interaction.values[0] === "general") {
                        interaction.update({ embeds: [general], components: components(false) });
                    }
                });
                collector.on('end', () => {
                  initialMessage.update({ components: components(true) });
              }
              )
    },
};
