const { serialize, decodeJid } = require('../CONNECTION/waconnect')
const chalk = require('chalk')


module.exports = MessageHandler = async (messages, dsan) => {
  try {
    if (messages.type !== 'notify') return
    let M = serialize(JSON.parse(JSON.stringify(messages.messages[0])), dsan)
    if (!M.message) return
    if (M.key && M.key.remoteJid === 'status@broadcast') return
    if (M.type === 'protocolMessage' || M.type === 'senderKeyDistributionMessage' || !M.type || M.type === '')
      return

    const { isGroup, type, sender, from, body } = M
    const gcMeta = isGroup ? await dsan.groupMetadata(from) : ''
    const gcName = isGroup ? gcMeta.subject : ''
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(dsan.prefix)
    const cmdName = body.slice(dsan.prefix.length).trim().split(/ +/).shift().toLowerCase()
    const arg = body.replace(cmdName, '').slice(1).trim()
    const groupMembers = gcMeta?.participants || []
    const groupAdmins = groupMembers.filter((v) => v.admin).map((v) => v.id)
    const m = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const ActivateMod = (await dsan.DB.get('mod')) || []
    const banned = (await dsan.DB.get('banned')) || []

    // Antilink system
    if (
      isGroup &&
       groupAdmins.includes(dsan.user.id.split(':')[0] + '@s.whatsapp.net') &&
      body
    ) {
      const groupCodeRegex = body.match(/chat.whatsapp.com\/(?:invite\/)?([\w\d]*)/)
      if (groupCodeRegex && groupCodeRegex.length === 2 && !groupAdmins.includes(sender)) {
        const groupCode = groupCodeRegex[1]
        const groupNow = await dsan.groupInviteCode(from)

        if (groupCode !== groupNow) {
          await dsan.sendMessage(from, { delete: M.key })
          return await dsan.groupParticipantsUpdate(from, [sender], 'remove')
          M.reply('Successfully removed an intruder!!!!')
        }
      }
    }
let sendtext = body.toLowerCase()
    if (sendtext.startsWith('hello bot')) {
      M.reply (`Hello *${M.pushName} Baby*, I Am *Dsan* Your Only *GF*. How Can I Help You?`);
    } else if(sendtext.includes("suck") || sendtext.includes("fuck")) { M.reply(`What The *Fuck!!* You ${M.pushName} *MotherFucker*`)}
    else if(sendtext.includes("suck") || sendtext.includes("miss you")) { M.reply(`I Miss You Too *${M.pushName}* Baby`)}
    //Banned system
    if (banned.includes(sender)) return M.reply('You are banned from using the bot')

    // Logging Message
    if (M.message && isGroup) {
      console.log(
        "" + "\n" + chalk.black(chalk.bgWhite("[ GROUP ]   => ")),
        chalk.black(
          chalk.bgRed(isGroup ? gcMeta.subject : M.pushName)
        ) +
        "\n" +
        chalk.black(chalk.bgWhite("[ SENDER ]  => ")),
        chalk.black(chalk.bgRed(M.pushName)) +
        "\n" +
        chalk.black(chalk.bgWhite("[ MESSAGE ] => ")),
        chalk.black(chalk.bgRed(body || type)) + "\n" + ""
      );
    }
    if (M.message && !isGroup) {
      console.log(
        "" + "\n" + chalk.black(chalk.bgWhite("[ PRIVATE CHAT ] => ")),
        chalk.black(chalk.bgMagentaBright("+" + M.from.split("@")[0])) +
        "\n" +
        chalk.black(chalk.bgWhite("[ SENDER ]       => ")),
        chalk.black(chalk.bgMagentaBright(M.pushName)) +
        "\n" +
        chalk.black(chalk.bgWhite("[ MESSAGE ]      => ")),
        chalk.black(chalk.bgMagentaBright(body || type)) + "\n" + ""
      );
    }
    

    if (!isCmd) return
    const command =
      dsan.cmd.get(cmdName) || dsan.cmd.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
    
    if (!command) return M.reply('͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏This is Not My acommand. 🙃🙃Are You Cheating On Me?? Did U Use Another Bot Instead Of Me???🥲🥲 I Hate U ' + M.pushName + ' Senpai!!🥲')
    command.execute(dsan, arg, M)
  } catch (err) {
    console.log(err, 'red')
  }
}