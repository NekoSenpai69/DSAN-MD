const { Sticker, StickerTypes } = require('wa-sticker-formatter')
let { getBuffer } = require("../lib/function")
let { TelegraPh } = require("../lib/uploader")
const fs = require("fs")
let { downloadMedia } = require("../CONNECTION/waconnect")
const axios = require("axios");
let nekourl = "https://agile-hare-sunglasses.cyclic.app"
const neko = ["sticker", "s", "steal", "sl", "stickersearch","sm","stickermeme", "sts"]
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
        
        if (isMedia || isQuoted) {
          M.reply("Please Wait Master...")
          const pack = arg.split(',')
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
              sticker:await sticker.build()
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
          M.reply("No data ")
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
      } else if (cmdn === "stickermeme" || cmdn === "sm"){
try {
  const content = JSON.stringify(M.quoted)
        const isQuoted =
          (M.type === 'extendedTextMessage' && content.includes('imageMessage')) 
const isMedia = M.type === 'imageMessage' 
   if (isQuoted || isMedia) {
            M.reply(`Please Wait Master ...`)
         // const download = await downloadMedia(M.quoted)
     const buffe = isQuoted ? await M.quoted.download() : await M.download()
    fs.writeFileSync("./temp.jpg",buffe)
     const link = await TelegraPh("./temp.jpg")
           let meme = await getBuffer(`https://api.memegen.link/images/custom/-/${arg}.png?background=${link}`)
//console.log("your data",meme)

const buffer = meme.data
           let sticker = new Sticker(buffer, {
                pack: package,
                author: M.pushName,
                type: StickerTypes.FULL,
                categories: ['🤩', '🎉'],
                quality: 70,
                background: 'transparent'
            });
        await dsan.sendMessage(
            M.from,
            {
              sticker: await sticker.build()
            },
            {
              quoted: M
            }
          )
            fs.unlinkSync("./temp.jpg");
            
            }
            else{
                M.reply(`Please mention an *image* and type *${dsan.prefix}smeme* to create sticker meme.`);
            }
} catch (err) {
   console.log(err)
}

}
    } catch (err) {
      M.reply("An Error Occurred!!")
      console.log(err);
    }
  }
}
