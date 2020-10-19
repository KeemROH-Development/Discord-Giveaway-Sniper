const Discord = require("discord.js-selfbot")
const client = new Discord.Client()
const config = require("./config.json")
const token = config.token;
const joins = config.joins;
const uid = config.uid;
const wins = config.wins;
const seconds = config.waittime;
client.on("ready", () => {
  console.log(`Successfully watching out for giveaways!`)
});
client.on('message', message => {
  if(message.author.id === "294882584201003009" && message.content.includes(`<:yay:585696613507399692>   **GIVEAWAY**   <:yay:585696613507399692>`)) {    
setTimeout(function(){  
    message.react('🎉').then(client.channels.cache.get(joins).send(`<@${uid}> Joined a giveaway hosted by GiveawayBot in this channel: <#${message.channel.id}>`));
      }, seconds * 1000);
   };
    if(message.author.id === "294882584201003009" && message.content.includes(`Congratulations <@${uid}>!`)) {
      client.channels.cache.get(wins).send(`***<@${uid}> YOU HAVE WON A GIVEAWAY IN:*** <#${message.channel.id}>:\n${message.content}`)
    };
});
client.login(token)