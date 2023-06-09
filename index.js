const app = require("express")();
const PORT = process.env.PORT || 8080;
const {
  default: DsanConnect,
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  useSingleFileAuthState
} = require('@adiwajshing/baileys');
const { Boom } = require('@hapi/boom');
const P = require('pino');
const { QuickDB } = require('quick.db')
const { MongoDriver } = require('quickmongo');
const fs = require("fs");
const { Collection } = require('discord.js')
const qr = require("qr-image");
const contact = require("./lib/contact.js");
const MessageHandler = require('./CONNECTION/message');
const MONGOURL = process.env.URL || "mongodb+srv://nekosenpai269:1234@shibam.qw9rlw0.mongodb.net/?retryWrites=true&w=majority"
console.log(`Bot Is Running Baby`);
const driver = new MongoDriver(MONGOURL)
const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })

async function startDsan() {

  let { version } = await fetchLatestBaileysVersion()
  const { state, saveState } = useSingleFileAuthState("./neko.json");

const clearState = () => {
  fs.unlinkSync("./neko.json");
}
  const dsan = DsanConnect({
    logger: P({ level: "silent" }),
    printQRInTerminal: false,
    browser: ["DSAN", "Chrome", "1.0.0"],
    qrTimeout: 5000,
    auth: state,
    version
  })

  store.bind(dsan.ev)

  dsan.cmd = new Collection()

  dsan.DB = new QuickDB({
    driver
  })

  dsan.mods = process.env.MODS || "7047584741";

  dsan.contactDB = dsan.DB.table('contacts')

  dsan.contact = contact

  dsan.prefix = process.env.PREFIX || '?'


  async function readcommands() {
    const cmdfile = fs
      .readdirSync("./Commands")
      .filter((file) => file.endsWith(".js"));
    for (const file of cmdfile) {
      const command = require(`./Commands/${file}`);
      dsan.cmd.set(command.name, command);
    }
  };

  readcommands()



  dsan.ev.on('creds.update', saveState)

  dsan.ev.on('connection.update', async (update) => {

    const { connection, lastDisconnect } = update


    if (connection === "close") {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode; if (reason === DisconnectReason.connectionClosed) {
        console.log("Connection closed, reconnecting....");
        startDsan();
      } else if (reason === DisconnectReason.connectionLost) {
        console.log("Connection Lost from Server, reconnecting...");
        startDsan();
      } else if (reason === DisconnectReason.loggedOut) {
        clearState();
        console.log(
          ` Device Logged Out, Please Delete Session and Scan Again.`
        );
        process.exit();
      } else if (reason === DisconnectReason.restartRequired) {
        console.log("Server starting...");
        startDsan();
      } else if (reason === DisconnectReason.timedOut) {
        console.log("Connection Timed Out, Trying to Reconnect....");
        startDsan();
      } else {
        console.log(
          `Server Disconnected: Maybe Your WhatsApp Account got banned !`
        );
        clearState();
      }
    }
    if (update.qr) {
      dsan.QR = qr.imageSync(update.qr)
    }
  }
  )

  app.get("/", (req, res) => {
    res.end(dsan.QR)
  })
  dsan.ev.on('messages.upsert', async (messages) => await MessageHandler(messages, dsan))

  dsan.ev.on('contacts.update', async (update) => await contact.saveContacts(update, dsan))


}
if (!MONGOURL) return console.error('You have not provided any MongoDB URL!!')
driver
  .connect()
  .then(() => {
    console.log(`Connected to the database!`)

    startDsan()
  })
  .catch((err) => console.error(err))


app.listen(PORT)
