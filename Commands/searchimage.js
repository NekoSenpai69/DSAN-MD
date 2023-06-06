let gis = require('async-g-i-s')
let { getBuffer } = require("../lib/function")
let nekourl = "https://long-plum-monkey-boot.cyclic.app/weeb"
let axios = require("axios");
let nekourl2 = "https://screenshot.kai0071.repl.co/"
let nekourl3 = "https://agile-hare-sunglasses.cyclic.app"
let neko = ["gimage", "gimg", "pinterest", "pinimg", "screenshot", "ss", "github", "gitsearch", "lyrics", "wikimedia", "animewallpaper", "aniwallpaper", "songlyrics", "wikiimg"]
module.exports = {
  name: "imagesearch",
  alias: [...neko],
  description: "All Logo maker Commands",
  react: "⭐",
  category: "fun",
  async execute(dsan, arg, m) {
    try {
      m.reply("Please Wait Master...")
      const cmdn = m.body.slice(1).trim().split(/ +/).shift().toLowerCase()
      if (cmdn === "gimage" || cmdn === "gimg") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          const result = await axios.get(nekourl3 + "/gimage?q=" + arg)
          if (result.data.url === undefined) {
            m.reply("No data ")
          } else {
            dsan.sendMessage(m.from, {
              image: {
                url: result.data.url
              },
              caption: `Thanks to *NekoSenpai*`
            });
          }
        } catch (error) {
          console.log(error)
        }

      } else if (cmdn === "pinterest" || cmdn === "pinimg") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          const result = await axios.get(nekourl + "/pinterest?q=" + arg)
          if (result.data.url === undefined) {
            m.reply("No data ")
          } else {
            dsan.sendMessage(m.from, {
              image: {
                url: result.data.url
              },
              caption: `Thanks to *NekoSenpai*`
            });
          }
        } catch (error) {
          console.log(error)
        }
      } else if (cmdn === "animewallpaper" || cmdn === "aniwallpaper") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          const result = await axios.get(nekourl + "/animewallpaper?anime=" + arg)

          dsan.sendMessage(m.from, {
            image: {
              url: result.data.image
            },
            caption: `${result.data.title}
Thanks to *NekoSenpai*`
          })

        } catch (error) {
          console.log(error)
        }
      } else if (cmdn === "screenshot" || cmdn === "ss") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          if (!arg.includes("https://")) {
            m.reply("Give The Link with https:// Example:- https://example.com")
          } else {
            let ss = await getBuffer(nekourl2 + "ss?link=" + arg);
            dsan.sendMessage(m.from, {
              image: ss.data,
              caption: `
Thanks to *NekoSenpai*`
            })
          }
        } catch (error) {
          console.log(error);
        }

      } else if (cmdn === "wikimedia" || cmdn === "wikiimg") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          const result = await axios.get(nekourl + "/Wikimedia?q=" + arg)

          if (result.data.url === undefined) {
            m.reply("No data ")
          } else {
            dsan.sendMessage(m.from, {
              image: {
                url: result.data.url.image
              },
              caption: `
*Source:* ${result.data.url.source}

Thanks to *NekoSenpai*`
            });
          }
        } catch (error) {
          console.log(error)
        }
      } else if (cmdn === "github" || cmdn === "gitsearch") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          const result = await axios.get(nekourl + "/github?account=" + arg)
          if (result.data.username === undefined) {
            m.reply("No data ")
          } else {
            dsan.sendMessage(m.from, {
              image: {
                url: result.data.image
              },
              caption: `
*UserName:* ${result.data.username}

*Followers:* ${result.data.followers}
                        
*Repo:* ${result.data.repo}

*Following:* ${result.data.following}
                           
*Bio:* ${result.data.bio}
              
Thanks to *NekoSenpai*`
            });
          }
        } catch (error) {
          console.log(error)
        }
      } else if (cmdn === "lyrics" || cmdn === "songlyrics") {
        try {
          if (!arg) return m.reply("Please Write A Query!!")
          const result = await axios.get(nekourl + "/lyrics?q=" + arg)

          if (result.data.lyrics === undefined) {
            m.reply("No data ")
          } else {
            dsan.sendMessage(m.from, {
              image: {
                url: result.data.thumbnail
              },
              caption: `
*Lyrics:* ${result.data.lyrics}


Thanks to *NekoSenpai*`
            });
          }
        } catch (error) {
          console.log(error)
        }
      }
    } catch (error) {
      console.log(err);
    }
  }
} 