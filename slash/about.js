const { MessageEmbed , MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
    name: 'about',
    description: 'All the informations about Electrix Giveaway',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle(`About Electrix Giveaway`)
        .setColor('#00FFFF')
        .setDescription('Electrix Giveaway is a Giveaway bot with advanced features and commands. This bot support **Slash commands** and it is the only one who have ore than 3 requirements that your can use!  ')
        .setTimestamp()
        .setFooter(`Requested by ${interaction.user.username} | Electrix Giveaway`, interaction.user.displayAvatarURL());
        
          const release= new MessageEmbed()
          .setTitle("The release date")
          .setColor('#00FFFF')
          .setDescription("The official release date of Electrix Giveaway is 22/9/2022")
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username} | Electrix Giveaway`, interaction.user.displayAvatarURL());
        
        
          const devs = new MessageEmbed()
          .setTitle("Developers and Beta Testers Informations")
          .setColor('#008a6a')
          .setDescription("The developer of Electrix Giveaway is **Electrix#0001** who started coding the bot from February 2022. He created a development team called Axle Development. The current beta testers is **!Ello#9923**. And he test every version of the bot and make sure there is no error in it before we release  the update to the bot.")
             .addFields(
            { name: 'Electrix#0001'  , value: `Founder of The bot and Owner of Axle Support.\n `, inline: true },
            { name: '!Ello#9923'  , value: `Beta Tester and helped Electrix with working with him on Electrix Giveaway.\n`,inline: true },
                 )
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());
        
          const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId("help-menu")
                .setPlaceholder("Please Select a button")
                .setDisabled(state)
                .addOptions([{
                        label: `Release date`,
                        description: `The release date of Electrix Giveaway`,
                        value: `release`,
                        emoji: `<:BOT:1079041643556122694>`
                    },
                    {
                        label: `Developers and Beta Testers Informations`,
                        value: `devs`,
                        emoji: `<a:developer_bot:1079037470680809572>`
                    },   
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
                    if (interaction.values[0] === "release") {
                        interaction.update({ embeds: [release], components: components(false) });
                    } else if (interaction.values[0] === "devs") {
                        interaction.update({ embeds: [devs], components: components(false) });
                    } else if (interaction.values[0] === "last") {
                        interaction.update({ embeds: [last], components: components(false) });
                    }
                });
                collector.on('end', () => {
                  initialMessage.update({ components: components(true) });
              }
              )
    },
};
