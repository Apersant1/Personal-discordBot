const { MessageEmbed } = require("discord.js"); // Подключаем библиотеку discord.js

// Команды //

function test(robot, mess, args) {
  mess.channel.send("Test!");
}

function rules(robot, mess, args) {
  const rules = new MessageEmbed()
    .setColor("#ff0000")
    .setTitle("**Правила текстового чата**")
    .setDescription(
      " 1.1 Все участники сервера равны перед правилами.\n" +
        "1.2 Мат разрешен, но не злоупотреблять им.(Выговор после Пред.)\n" +
        "1.3 Запрещен NSFW-контент (порнография, шок-контент)(Пред.)\n" +
        "1.4 Запрещен любой вид флуда(Выговор после Пред.)\n" +
        "1.5 Запрещено оскорбление админов(Пред.)\n" +
        "1.7 Запрещена реклама без согласования с управлением сервера(Пред./Кик)"
    );
  mess.channel.send(rules);
}

function about_info(robot, mess, args) {
  const exampleEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setTitle("КАТЕГОРИЯ ИНФОРМАЦИЯ")
    .setDescription(
      "<#718092109218971789> -  Правила сервера\n" +
        "<#762649776906829834>  - Новости о сервере и вне сервера\n" +
        "<#798227790570061825> - Для получение справки о сервере\n" +
        "<#944916559707660338> - Для получение справки о боте"
    );

  const chattingEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setTitle("КАТЕГОРИЯ CHATTING")
    .setDescription(
      "<#798231721287352331> -  Основной чат для общения\n" +
        "<#798231770213515305>  - Чат для мемов/паст/срача\n" +
        "<#944898637207568385>  - Заказ треков\n"
    );

  const contentEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setTitle("КАТЕГОРИЯ CONTENT")
    .setDescription(
      " <#944953752727728178>   -  Канал для классных пикч\n" +
        "<#944953927596642354>   -  Для разрывных мемов\n" +
        "<#944953822399303760>   -  Просто yobka"
    );
  const rolesEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setTitle("РОЛИ")
    .setDescription(
      " <@&783705820604268564>   -  Администраторы\n" +
        "<@&718091379988889660>   -  Модераторы\n" +
        "<@&853240977916559383>   -  Люди, которые поддержали сервер при помощи буста \n" +
        "<@&798966899248726076>   -  Роль от 30-ого лвл\n" +
        "<@&798968246396518410>   - Выдаётся женщинам по их желанию\n" +
        "``Остальные роли являются второстепенными, и выдаются на усмотрение администрации``"
    );

  const descEmbed = new MessageEmbed()
    .setColor("#ff0000")
    .setDescription(
      "Опыт за отправку сообщения начисляется во всех текстовых каналах\n\n" +
        "По команде !ранг в <#798231721287352331> можно\n проследить за уровневой системой"
    )
    .setImage("https://pbs.twimg.com/media/D1tOcsBX0AAEyZQ.jpg:large");

  mess.channel.send({
    embeds: [exampleEmbed, chattingEmbed, contentEmbed, rolesEmbed, descEmbed],
  });
}

// Список команд //

var comms_list = [
  {
    name: "test",
    out: test,
    about: "Тестовая команда",
  },
  {
    name: "about_info",
    out: about_info,
    about: "Команда для получения справки по каналам!",
  },
  {
    name: "rules",
    out: rules,
    about: "Получение правил",
  },
];


//TODO сделать API вывода графиков о крипте

//TODO поправить id каналов #news #bad #pics

//TODO


// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды

module.exports.comms = comms_list;
