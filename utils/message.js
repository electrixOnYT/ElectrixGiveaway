const config = require('../config.json');
module.exports = {
  giveaway:
    (config.everyoneMention ? "\n\n" : "") +
    "🎉 **GIVEAWAY** 🎉",
  giveawayEnded:
    (config.everyoneMention ? "\n\n" : "") +
    "🎉 **GIVEAWAY ENDED** 🎉",
  drawing:  `Ends: **{timestamp}**`,
  inviteToParticipate: `React with 🎉 to participate!`,
  winMessage: "Congratulations, {winners}! You won **{this.prize}**!",
  embedFooter: `{this.winnerCount} Winner(s)`,
  noWinner: "Giveaway cancelled, no valid participations.",
  hostedBy: "Hosted By: {this.hostedBy}",
  winners: "Winner(s)",
  endedAt: "Ended at"
}