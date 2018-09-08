const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Kullanıcı Komutları**", `!report = İstediğiniz Kullanıcıyı Reportlarsınız. \n!kısalt = İstediğiniz Linki Kısaltarak Özelleştire Bilirsiniz. \n!yaz = Bota İsediğinizi Yazdırırsınız. \n!sunucubilgi = Bulunduğunuz Sunucu Hakkında Bilgi Verir. \n!sunucuresmi = Bulunduğunuz Sunucunun Resmin Gösterir. \n!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. \n!avatarım = Avatarınınızı Gösterir. \n!döviz = Alnlık döviz kurlarını gösterir. \n!tersyaz = yazdığınız yazıyı ters harfler ile yazar.`)
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
  aliases: ['k', 'kullanici', 'küllanıcı', 'kk'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları gösterir.',
  usage: 'kullanıcı [komut]'
};
