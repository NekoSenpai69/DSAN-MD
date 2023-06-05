const axios = require("axios");
const nekopaiapi = "https://long-plum-monkey-boot.cyclic.app/weeb/"
const neko = [
  "marvelstudio2",
  "marvelstudio1",
  "graffiti",
  "captainamerica",
  "pornhub"
]
module.exports = {
  name: "logomakers2",
  alias: [...neko],
  description: "All Logo maker Commands",
  react: "⭐",
  exp: "4",
  category: "fun",
  async execute(dsan, arg, m) {
    
    
  try {
    const cmdn = m.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    let textt1 = arg.split(",")[0];
    let textt2 = arg.split(",")[1]
    if (!textt2) {
      m.reply("Write A Second Word Please")
    } else {
m.reply("Please wait Master . . .")
    }
    
    let res = await axios.get(`${nekopaiapi}${cmdn}?text1=${textt1}&text2=${textt2}`);
    dsan.sendMessage(m.from, {
      image: {
        url: res.data.url
      },
      caption: `Made by ${res.data.creator}`
    })
} catch (error) {
     console.log(error)
  }
  }

}

