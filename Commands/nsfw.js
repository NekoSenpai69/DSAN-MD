const axios = require("axios");
const NSFWstatus = process.env.NSFW || false
const nsfw = ['spreadpussy', 'genshin', 'squirt', 'glasses', 'sunglasses', 'swimsuit', 'schoolswimsuit', 'hololive', 'ass', 'underwear', 'nipples', 'uncensored', 'sex', 'sex2', 'sex3', 'blonde', 'twintails', 'breasts', 'thighhighs', 'skirt', 'gamecg', 'animalears', 'foxgirl', 'dress', 'schooluniform', 'twogirls', 'gloves', 'vocaloid', 'touhou', 'weapon', 'withflowers', 'pinkhair', 'cloudsview', 'white', 'animal', 'tail', 'nude', 'ponytail', 'bed', 'whitehair', 'ribbons', 'japanesecloths', 'hatsunemiku', 'bikini', 'barefoot', 'nobra', 'food', 'wings', 'pantyhose', 'openshirt', 'headband', 'penis', 'close', 'wet', 'catgirl', 'wolfgirl', 'hneko', 'hloli', 'pussy','spreadlegs', 'bra', 'fateseries', 'tree', 'elbowgloves', 'greenhair', 'horns', 'withpetals', 'drunk', 'cum', 'headdress', 'tie', 'shorts', 'hmaid', 'headphones', 'anusview', 'Idol', 'gun', 'stockings', 'tears', 'breasthold', 'necklace', 'seethrough', 'bunnyears', 'bunnygirl', 'topless', 'beach', 'erectnipples', 'yuri', 'vampire', 'shirt', 'pantypull', 'tornclothes', 'bondage', 'demon', 'bell', 'shirtlift', 'tattoo', 'chain', 'flatchest', 'fingering']
module.exports = {
  name: "nsfwpics",
  alias: [...nsfw],
  desc: "Hentai picture of animal waifus", 
  category: "Nsfw",
  react: "🍁",
  async execute(dsan,arg, m) {
try {
  if (NSFWstatus === false) return m.reply(`This Bot is not NSFW enabled!`);
   const cmdn = m.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    
    m.reply(`Please Wait Master ....`)
    
    let nekoo= await axios.get(`https://fantox-apis.vercel.app/${cmdn}`)
    let nekokun = nekoo.data.url
      
    let neko = {
      image: {url: nekokun},
      caption: `*Yamatte kudasai ${m.pushName} onichaan!!*`,
      headerType: 4,
    };
    
    await dsan.sendMessage(m.from, neko, { quoted: m }).catch((err) => {
      console.log(err);
    });
    } catch (error) {
   console.log(error);
  m.reply("An Error Occurred!!")
}
  },
};