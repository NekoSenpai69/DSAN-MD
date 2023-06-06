const { Sticker, StickerTypes } = require('wa-sticker-formatter')
let { getBuffer } = require("../lib/function")
const axios = require("axios");
let nekourl = "https://agile-hare-sunglasses.cyclic.app"
const neko = ["sticker", "s", "steal", "sl", "stickersearch", "sts"]
module.exports = {
  name: 'stickers',
  alias: [...neko],
  category: 'utils',
  description: 'sticker [caption/quote message containing media] <pack> | <author>',
  async execute(dsan, arg, M) {
    try {
      const author = process.env.AUTHOR || M.pushName
      const package = process.env.PACKAGE || "DSAN"
      const cmdn = M.body.slice(1).trim().split(/ +/).shift().toLowerCase()
      if (cmdn === "sticker" || cmdn === "s") {
        const content = JSON.stringify(M.quoted)
        const isMedia = M.type === 'imageMessage' || M.type === 'videoMessage'
        const isQuoted =
          (M.type === 'extendedTextMessage' && content.includes('imageMessage')) ||
          (M.type === 'extendedTextMessage' && content.includes('videoMessage'))
        console.log(M)
        if (isMedia || isQuoted) {
          M.reply("Please Wait Master...")
          const pack = arg.split('|')
          const buffer = isQuoted ? await M.quoted.download() : await M.download()
          const sticker = new Sticker(buffer, {
            pack: pack[0] ? pack[0].trim() : package,
            author: pack[1] ? pack[1].trim() : author,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            quality: 70
          })

          await dsan.sendMessage(
            M.from,
            {
              sticker: await sticker.build()
            },
            {
              quoted: M
            }
          )
        }
      } else if (cmdn === "steal" || cmdn === "sl") {
        const content = JSON.stringify(M.quoted)

        const isQuotedSticker =
          (M.type === 'extendedTextMessage' && content.includes('stickerMessage'))
        if (isQuotedSticker) {
          M.reply("Please Wait Master...")
          const pack = arg.split(',')
          const buffer = isQuotedSticker ? await M.quoted.download() : await M.download()
          const sticker = new Sticker(buffer, {
            pack: pack[0] ? pack[0].trim() : package,
            author: pack[1] ? pack[1].trim() : author,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            quality: 70
          })

          await dsan.sendMessage(
            M.from,
            {
              sticker: await sticker.build()
            },
            {
              quoted: M
            }
          )
        }
      } else if (cmdn === "stickersearch" || cmdn === "sts") {
        M.reply("Please Wait Master...")
        const result = await axios.get(nekourl + "/gimage?q=" + arg)
        if (result.data.url === undefined) {
          m.reply("No data ")
        } else if (result.data.url !== undefined) {

          let buff = await getBuffer(result.data.url)

          const buffer = buff.data
          const sticker = new Sticker(buffer, {
            pack: package,
            author: author,
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            quality: 70
          })

          await dsan.sendMessage(
            M.from,
            {
              sticker: await sticker.build()
            },
            {
              quoted: M
            }
          )
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
}
