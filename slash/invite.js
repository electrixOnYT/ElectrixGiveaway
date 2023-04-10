const { MessageEmbed , MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
    name: 'invite',
    description: 'Invite Electrix Giveaway to your Server!',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle(`Invite Electrix Giveaway`)
        .setColor('#00FFFF')
        .setDescription('Invite Electrix Giveaway to your Server and have more experiences with it!')
        .setTimestamp()
        .setFooter(`Requested by ${interaction.user.username} | Electrix Giveaway`, interaction.user.displayAvatarURL());
        
          const invite = new MessageEmbed()
          .setTitle("Invite Electrix Giveaway")
          .setColor('#00FFFF')
          .setDescription("Invite Electrix Giveaway by [clicking here](https://electrixgiveaway.weebly.com/invite)")
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username} | Electrix Giveaway`, interaction.user.displayAvatarURL());
        
        
          const support = new MessageEmbed()
          .setTitle("Support Server")
          .setColor('#00FFFF')
          .setDescription("Feeling lost? Join [Electrix Giveaway Support Server](https://discord.gg/BB6QFKzyAd)")
          .setTimestamp()
          .setFooter(`Requested by ${interaction.user.username}`, interaction.user.displayAvatarURL());
        
          const components = (state) => [
            new MessageActionRow().addComponents(
                new MessageSelectMenu()
                .setCustomId("help-menu")
                .setPlaceholder("Please Select a button")
                .setDisabled(state)
                .addOptions([{
                        label: `Invite Electrix Giveaway`,
                        value: `invite`,
                        emoji: ``
                    },
                    {
                        label: `Support Server`,
                        description: `Feeling lost?`,
                        value: `support`,
                        emoji: ``
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
                    if (interaction.values[0] === "invite") {
                        interaction.update({ embeds: [invite], components: components(false) });
                    } else if (interaction.values[0] === "support") {
                        interaction.update({ embeds: [support], components: components(false) });
                    }
                });
                collector.on('end', () => {
                  initialMessage.update({ components: components(true) });
              }
              )
    },
};
