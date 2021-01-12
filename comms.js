const config = require('./config.json'); // Подключаем файл с параметрами и информацией
const Discord = require('discord.js'); // Подключаем библиотеку discord.js
const prefix = config.prefix; // «Вытаскиваем» префикс

// Команды //

function test(robot, mess, args) {
    mess.channel.send('Test!')
}

function clear(robot, mess, args) {
    const arggs = mess.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
    const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
    if (!amount) return mess.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
    if (isNaN(amount)) return mess.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 

    async function delete_messages() { // Объявление асинхронной функции

        await mess.channel.messages.fetch({
            limit: amount
        }).then(messages => {
            mess.channel.bulkDelete(messages)
            mess.channel.send(`Удалено ${amount} сообщений!`)
        })
    };
    delete_messages();
}



function rules(robot, mess, args){
    const rules = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setTitle('**Правила текстового чата**')
    .setDescription(' 1.1 Все участники сервера равны перед правилами.\n'
                    +'1.2 Мат разрешен, но не злоупотреблять им.(Выговор после Пред.)\n'
                    +'1.3 Запрещен NSFW-контент (порнография, шок-контент)(Пред.)\n'
                    +'1.4 Запрещен любой вид флуда(Выговор после Пред.)\n'
                    +'1.5 Запрещено оскорбление админов(Пред.)\n'
                    +'1.7 Запрещена реклама без согласования с управлением сервера(Пред./Кик)');
    mess.channel.send(rules)                
}

function about_info(robot, mess, args){
    const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
    .setTitle('КАТЕГОРИЯ ИНФОРМАЦИЯ')
    .setDescription('<#762649776906829834> -  Новости о сервере и вне сервера\n'+'<#718092109218971789>  - Правила сервера')

    const chattingEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
    .setTitle('КАТЕГОРИЯ CHATTING')
    .setDescription('<#798231721287352331> -  Основной чат для общения\n'
                   +'<#798231770213515305>  - Чат для мемов/паст/срача');



    const contentEmbed = new Discord.MessageEmbed()
	.setColor('#ff0000')
    .setTitle('КАТЕГОРИЯ CONTENT')
    .setDescription(' <#798276907316936704>   -  Канал для классных пикч\n'
                    +'<#798231770213515305>   -  Канал для музыки\n'
                    +'<#798277166823243839>   -  Просто yobka');


    const descEmbed = new Discord.MessageEmbed()
    .setColor('#ff0000')
    .setDescription('Опыт начисляется за отправку сообщения и\n только в текстовом канале <#798231721287352331>\n\n\n\n'+
                    'По команде !levels в <#798231721287352331> можно\n проследить за уровневой системой')
    .setImage('https://pbs.twimg.com/media/D1tOcsBX0AAEyZQ.jpg:large')



    mess.channel.send(exampleEmbed)
    mess.channel.send(chattingEmbed)
    mess.channel.send(contentEmbed)
    mess.channel.send(descEmbed)
}

// Список команд //

var comms_list = [{
    name: "test",
    out: test,
    about: "Тестовая команда"
}, {
    name: "clear",
    out: clear,
    about: "Команда для удаления!"
}, {
    name: "about_info",
    out: about_info,
    about: "Команда для получения справки по каналам!"
},{
    name:"rules",
    out:rules,
    about: "Получение правил"
}];

// Name - название команды, на которую будет реагировать бот
// Out - название функции с командой
// About - описание команды 

module.exports.comms = comms_list;