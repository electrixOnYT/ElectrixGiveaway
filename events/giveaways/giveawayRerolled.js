const Discord = require("discord.js")
module.exports = {
  async execute(giveaway, winners) {
    winners.forEach((member) => {
      member.send({
        embeds: [new Discord.MessageEmbed()
          .setTitle(`🎁 Let's goo! We Have A New Winner`)
          .setColor("#00FFFF")
          .setDescription(`Hello there ${member.user}\n I heard that the host rerolled and you have won **[[This Giveaway]](https://discord.com/channels/${giveaway.guildId}/${giveaway.channelId}/${giveaway.messageId})**\n Good Job On Winning **${giveaway.prize}!**\nDirect Message the host to claim your prize!!`)
          .setTimestamp()
          .setFooter(member.user.username, member.user.displayAvatarURL())
        ]
      });
    });
  }
}