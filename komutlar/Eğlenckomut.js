const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**» Eğlence Komutları**", `!atatürk = Rastgele Atatürkün Fotoğraflarını Gösterir. \n!starwars = StarWars (Pixel Formatında) Filmini Gösterir. \n!banned = Dene ve Gör! \n!kahkaha = Kahkaha Atarsınız \n!herkesebendençay = Herkese Çay Alırsınız. \n!koş = Koşarsınız.\n!çayiç = Çay İçersiniz. \n!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \n!çayaşekerat = Çaya Şeker Atarsınız. \n!yumruk-at = Yumruk Atarsınız. \n!şanslısayım = Bot Sizin Şanslı Sayınızı Söyler. \n!espiriyap = Espiri yapar \n!yazı-tura = Yazı tura yapar \n!öp = Etiketlediğiniz kişiyi öper \n!balıktut = Balık tutar \n!sarıl = Etiketlediğiniz kişiye sarılır \n!sigara = Sigara içer \n!nsfw = siz bilirsiniz:)`)
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
  aliases: ['e', 'eylence', 'eglence', 'eğlence'],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence [komut]'
};
