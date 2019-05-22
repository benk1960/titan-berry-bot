const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${client.users.size} אנשים בשרת`, {type: "PLAYING"});
});

var prefix = '.'


client.on('message', function(message) {
  
  var command = message.content.split(" ")[0].slice(prefix.length).toLowerCase();
  var args = message.content.split(" ").slice(1);
  let suffix = args.join(" ");
  let mm = message.mentions.members.first();
  var role = message.guild.roles.find(role => role.name === "Muted");
  let messageArray = message.content.split(" ");


  

  
  if (command === "say") {
    if (message.member.roles.some(role => role.name === 'support-team'))
  {
    message.delete();
    message.channel.send(suffix);
  }

  }

  if (command === "mute") {
    if (message.member.roles.some(role => role.name === 'support-team'))
    {
      mm.addRole(role);
      var c = 90
      setInterval(function () {
        c =   c - 1;
      
        if (c == 0) {
        console.log("Timer Done!")
        mm.removeRole(role);
        return;
        }
      }, 20000)
    }


  }

  if (command === "unmute") {
    if (message.member.roles.some(role => role.name === 'support-team'))
    {
      mm.removeRole(role);
    }
  }

  if (command === "gstart") {
    if (message.member.roles.some(role => role.name === 'Giveaways'))
    {
      let winners = 1;
      let time = 1000 * 60 * 3;
      //let channel = message.channels.get("518461830566510603");
      var item = 'משתמש רנדומלי';
      let id;
      
      const embed = new Discord.RichEmbed()
      .setDescription(item);
      
      message.channel.send(embed).then(e => { 
        id = e.id;
        e.react("🎉");
      });

      setTimeout(function(){
        message.channel.fetchMessage(id).then(msg => {
          let winner = msg.reactions.filter( r => r.emoji.name == "🎉").first().users.filter(u => u.id != client.user.id).random();
        message.channel.send(winner + " Won in " + item + "!"); 
        });
      }, time);

      
      
  }

  }
  
    if (command === "cstart") {
    if (message.member.roles.some(role => role.name === 'Giveaways'))
    {
      let winners = 1;
      let time = 1000 * 60 * 3;
      //let channel = message.channels.get("518461830566510603");
      var item = '50K נקודות';
      let id;
      
      const embed = new Discord.RichEmbed()
      .setDescription(item);
      
      message.channel.send(embed).then(e => { 
        id = e.id;
        e.react("🎉");
      });

      setTimeout(function(){
        message.channel.fetchMessage(id).then(msg => {
          let winner = msg.reactions.filter( r => r.emoji.name == "🎉").first().users.filter(u => u.id != client.user.id).random();
        message.channel.send(winner + " Won in " + item + "!"); 
        });
      }, time);

      
      
  }

  }

});




client.login('NTExOTQzMDg2NTA3ODE5MDEw.XOAnVw.UfoG7jkrnJbVu4jTldJKVmCLgYY');
