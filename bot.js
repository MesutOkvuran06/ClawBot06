const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.on("ready", () => {
  client.user.setGame(prefix + "yardım | Güncellemelerden Bot Bazen Çevirim Dışı Ola Bilir! | ClawBot")
  console.log("Bağlandım!")
});

bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'hosgeldiniz-log');
  if (!channel) return;
  if(!channel) return message.channel.send(" `hosgeldiniz-log` İsminde Yazı Kanalı Bulamıyorum.!");

  channel.send(`Sunucuya hoşgeldiniz, ${member}`);
  const sunucubilgi = new Discord.RichEmbed()
  .setAuthor(`Aramıza Hoşgeldin ${member}`)
  .setColor(3447003)
  .setTimestamp()
  .setDescription('')
  .setImage(`http://clawbot.tk/img/hg.png`)
  return message.channel.sendEmbed(sunucubilgi);
});

client.on('message', async msg => {
    if (msg.content.toLowerCase() === prefix + "disco") {
   if (msg.channel.type === "dm") return;
  const renk = [
  'DEFAULT',
  'BLACK',
  'GREEN',
  'BLUE',
  'PURPLE',
  'GOLD',
  'ORANGE',
  'RED',
  'GREY',
  'DARKER_GREY',
  'NAVY',
  'DARK_AQUA',
  'DARK_GREEN',
  'DARK_BLUE',
  'DARK_PURPLE',
  'DARK_GOLD',
  'DARK_ORANGE',
  'DARK_RED',
  'DARK_GREY',
  'LIGHT_GREY',
  'DARK_NAVY',
  'BEİGE'
];
  setInterval(function() {
        var random = Math.floor(Math.random()*(renk.length-0+1)+0);
      msg.guild.roles.find('name', "Disko").setColor(renk[random]) // Disco yazılan yer rol ismi. Disco ismini değiştirirseniz başka isim felan yaparsanız değiştirdiğiniz isimde bir rol oluşturmanız gerekmektedir.
      }, 7000);
  }
});

client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + 'döviz') {
var request = require('request');
request('https://www.doviz.com/api/v1/currencies/USD/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var info = JSON.parse(body);
request('https://www.doviz.com/api/v1/currencies/EUR/latest', function (error, response, body) {
    if (error) return console.log('Hata:', error);
    else if (!error) {
        var euro = JSON.parse(body);
      message.channel.send(new Discord.RichEmbed().setDescription(`Dolar satış: ${info.selling} \nDolar alış: ${info.buying} \n\nEuro satış: ${euro.selling}TL \nEuro alış: ${euro.buying}TL`).setColor('RANDOM').setTitle('Anlık Döviz Kurları'))    }
})
    }
})
    }
});

const devs = ['454285419740266507']
client.on('message', async message => {
    if (message.content.toLowerCase() === prefix + "dmduyuru") {
        if(!devs.includes(message.author.id)) return;
        if(message.channel.type === "dm") return message.channel.send("Bunu sadece suncuuda kullanabilirsin!")
        let args = message.content.split(' ').slice(1).join(' ');
        message.channel.sendMessage(`:incoming_envelope: ➤ Mesaj ${client.users.size} kullanıcıya gönderildi.`);
        client.users.forEach(m =>{
            const embed = Discord.RichEmbed()
                .setTitle("Yapımcıdan bir mesajın var.")
                .setDescription(`Merhaba, ${m} \n\n${args}`)
            m.send({embed})
        })
    }
})

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "yazı-tura") {
    var result = Math.floor((Math.random() * 2) + 1);
    if (result == 1) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('')
      .setDescription('Tura.')
      .setThumbnail('https://i.imgur.com/iUaWmhg.jpg')
      message.channel.send(embed);
    } else if (result == 2) {
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle('')
      .setDescription('Yazı.')
      .setThumbnail('https://i.imgur.com/54JPj7Z.jpg')
      message.channel.send(embed);
    }
}});

client.on("message", async message => {
    const args = message.content.substring(prefix.length).split(" ");
    const command = args.shift().toLowerCase();
    if (command === "ters" || command === "tersyaz") {
        const mapping = '¡"#$%⅋,)(*+\'-˙/0ƖᄅƐㄣϛ9ㄥ86:;<=>¿@∀qƆpƎℲפHIſʞ˥WNOԀQɹS┴∩ΛMX⅄Z[/]^_`ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz{|}~';
        // Komut kullanıldığında '!'  Karakteri ile başla.
        const OFFSET = '!'.charCodeAt(0);
        if (args.length < 1) {
            message.channel.send('Lütfen ters yazmak istediğiniz bir yazı giriniz.');
        }

        message.channel.send(
            args.join(' ').split('')
            .map(c => c.charCodeAt(0) - OFFSET)
            .map(c => mapping[c] || ' ')
            .reverse().join('')
        )
    }
});

client.on("message", message => {
    const dmchannel = client.channels.find("name", "dm-log");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}`
        }})
    }
});

client.on("ready", () => {
  var Activity = [

      "Getirlmesini istediğiniz komutu !tavsiye ile bildir",

      "!atatürk resimlerine bakıyor",

      "!Balıktut UYOR",

      "ClawBot Gün geçtikçe gelişecek"

  ];

  setInterval(function() {

      var random = Math.floor(Math.random()*(Activity.length-0+1)+0);

      client.user.setActivity(Activity[random], { type: 'PLAYING' });
      }, 6 * 3000);

    //Değerler
      //WATCHING: İzliyor
    //PLAYING: Oynuyor
    //LISTENING: Dinliyor

})

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "espiriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel", "Can bedenden çıkmazsa nolur? \n+Matamatik dersine geç kalır.", "Adamın biri televizyona çıkmış indirememişler.", "Bir romanı 7 kız yazarsa nolur? \n-  seven kızın romanı."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    return message.channel.send(sonuc);
}
});

client.on("message", async message => {
    if (message.content.toLowerCase() === prefix + "nsfw") {
 if(message.channel.nsfw || message.channel.type === 'dm'){
   let embed = new Discord.RichEmbed()
   .setTitle('Sanırım sapık birisi var?')
   .setColor(0x00AE86)
   .setImage(("https://cdn.boobbot.us/4k/4k"+ Math.floor(Math.random() * 1460)+".jpg"))
   message.channel.send(embed)
}
 else{
       message.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFAD + 2)),
description: ('Bu kanal NSFW kanalı değil.')
 }})
 }
}
});
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
		if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
			msg.author.sendMessage('Aleyküm selam,  hoş geldin ^^');
		} else {
		msg.reply('Aleyküm selam, hoş geldin ^^');
		}
	}
});

client.on("message", message => {
const dmchannel = client.channels.find("name", "botlog");
if (message.channel.type === "dm") {
    if (message.author.id === client.user.id) return;
    dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Yazan: ${message.author.tag}`,
            description: `${message.content}`
          }})
}
if (message.channel.bot) return;
});

client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** :no_smoking: **Sigara Sağlığa Zararlıdır**'));
}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKENN);
