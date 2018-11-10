const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "a";
const developers = ['441554686399741962'];

console.log("Frrrrrrrrrrrrrank");

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**Êã ÊÛííÑ ÇáÈáÇíäŞ Çáì   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Êóã ÊÛííÑ ÇáæÇÊÔíäŞ Çáì   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Êóã ÊÛííÑ ÇááíÓíäíäŞ Çáì   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/inikolaii");
      message.channel.send(`Êã ÊÛííÑß ÍÇáÊß ÈÇáÊæíÊÔ Çáì   **${argresult}**`)
  }
  if (message.content.startsWith(adminprefix + 'sn')) {
  client.user.setUsername(argresult).then
      message.channel.send(`ÌÇÑí ÊÛííÑ ÇáÃÓã áÜ ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'sa')) {
  client.user.setAvatar(argresult);
    message.channel.send(`**ÌÇÑí ÊÛííÑ ÇáÃİÊÇÑ... :** `);
}
});



client.login(process.env.BOT_TOKEN);