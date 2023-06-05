const nekopaiapi = "https://long-plum-monkey-boot.cyclic.app/weeb/"
const axios = require("axios");


module.exports = {
  name: "truth",
  alias: ["t","d","dare"],
  description: "Truth",
  react: "⭐",
  exp: "4",
  category: "fun",
  async execute(dsan,args, m) {
    m.reply("Please wait ...")  
    
const cmdn = m.body.slice(1).trim().split(/ +/).shift().toLowerCase()

    if (cmdn === "truth") {
      const truthData = await axios.get(nekopaiapi+"truth")
        await dsan.sendMessage(
          m.from,{
          text: `*${truthData.data.truth}*`
} ,
          { quoted: m }
        );        
    } else if (cmdn === "t") {
      const truthData = await axios.get(nekopaiapi+"truth")
        await dsan.sendMessage(
          m.from,{
          text: `*${truthData.data.truth}*`
} ,
          { quoted: m }
        );        
    } else if (cmdn === "dare") {
      const dareData = await axios.get(nekopaiapi+"dare")
        await dsan.sendMessage(
          m.from,{
          text: `*${dareData.data.dare}*`
} ,
          { quoted: m }
        );        
    } else if(cmdn === "d") {
      const dareData = await axios.get(nekopaiapi+"dare")
        await dsan.sendMessage(
          m.from,{
          text: `*${dareData.data.dare}*`
} ,
          { quoted: m }
        );
     }    
    }
  }
