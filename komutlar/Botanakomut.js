const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("**Komutlar**")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Botun Ana Komutları**", "!yardım = BOT Komutlarını Atar. \n!bilgi = BOT Kendisi Hakkında Bilgi Verir. \n!ping = BOT Gecikme Süresini Söyler. \n!davet = BOT Davet Linkini Atar. \n!istatistik = BOT İstatistiklerini Gösterir. \n!tavsiye = Botun gelişiminde sizde yardım edin")
  .setFooter('ClawBot Güncel Sürüm [ BETA v0.2.5 ]')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['b', 'bk', 'bkb', 'botkomut'],
  permLevel: 0
};

exports.help = {
  name: 'botkomut',
  description: 'Tüm komutları gösterir.',
  usage: 'botkomut [komut]'
};
