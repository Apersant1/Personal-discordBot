const { Client, Intents } = require("discord.js"); // Подключаем библиотеку discord.js
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const comms = require("./comms.js"); // Подключаем файл с командами для бота
const prefix = "&";
// Подключаем родной модуль файловой системы node.js
client.on("ready", function () {
  /* При успешном запуске, в консоли появится сообщение «[Имя бота] запустился!» */
  console.log(client.user.username + " запустился!");
});

client.on("messageCreate", (msg) => {
  // Реагирование на сообщения
  if (msg.author.username != client.user.username) {
    if (msg.content === "ping") {
      msg.channel.send("pong");
    }
    let comm = msg.content.trim() + " ";
    let comm_name = comm.slice(0, comm.indexOf(" "));
    let messArr = comm.split(" ");

    for (let comm_count in comms.comms) {
      let comm2 = prefix + comms.comms[comm_count].name;
      if (comm2 == comm_name) {
        comms.comms[comm_count].out(client, msg, messArr);
      }
    }
  }
});

client.login("Nzc5NzI0MTUyNTcxMDM1NzQw.X7kstA.hExus0E_r842kcX-WAHqitdRTXA"); // Авторизация бота
