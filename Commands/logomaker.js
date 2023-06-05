const mumaker = require("mumaker")
const neko = [
  "3dchristmas",
  "3dneon",
 "3dstone",
  "3dspace",
  "bear",
  "blackpink",
  "bookeh",
  "candy",
  "carbon",
  "chocolate",
  "christmas",
  "cloud",
  "circuit",
  "deepsea",
  "dropwater",
  "demon",
  "future",
  "glitch",
  "glitch2",
  "joker",
  "holographic",
  "magma",
  "matrix",
  "neon",
  "papercut",
  "sketch",
  "scifi",
  "thunder",
  "thunder2",
  "wall",
  "transformer"
]
module.exports = {
  name: "logomakers1",
  alias: [...neko],
  description: "All Logo maker Commands",
  react: "⭐",
  category: "fun",
  async execute(dsan, arg, m) {
    
    try {  
      
    const cmdn = m.body.slice(1).trim().split(/ +/).shift().toLowerCase()
    let text = arg 
    if (!text) {
       m.reply(`Write a word for creating logo ${m.pushName}!!`)
    } else { 
      m.reply("Please wait ...")
           }
    if (cmdn === "3dchristmas") {
      mumaker.textpro(
            "https://textpro.me/3d-christmas-text-effect-by-name-1055.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "3dstone") {
       mumaker.textpro(
            "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "3dneon"){
       mumaker.textpro(
            "https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "3dspace") {
       mumaker.textpro(
            "https://textpro.me/create-space-3d-text-effect-online-985.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "bear"){
       mumaker.textpro(
            "https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "blackpink"){
       mumaker.textpro(
            "https://textpro.me/create-blackpink-logo-style-online-1001.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "blood"){
       mumaker.textpro(
            "https://textpro.me/horror-blood-text-effect-online-883.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "bookeh"){
       mumaker.textpro(
            "https://textpro.me/bokeh-text-effect-876.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "candy"){
       mumaker.textpro(
            "https://textpro.me/create-christmas-candy-cane-text-effect-1056.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "carbon"){
       mumaker.textpro(
            "https://textpro.me/carbon-text-effect-833.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "chocolate"){
       mumaker.textpro(
            "https://textpro.me/chocolate-cake-text-effect-890.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "christmas"){
       mumaker.textpro(
            "https://textpro.me/christmas-tree-text-effect-online-free-1057.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "circuit"){
       mumaker.textpro(
            "https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "cloud"){
       mumaker.textpro(
            "https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
      } else if (cmdn === "demon"){
       mumaker.textpro(
            "https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "dropwater") {
       mumaker.textpro(
            "https://textpro.me/dropwater-text-effect-872.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "glitch"){
       mumaker.textpro(
            "https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "future"){
       mumaker.textpro(
            "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "glitch2"){
       mumaker.textpro(
            "https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "joker"){     mumaker.textpro(
            "https://textpro.me/create-logo-joker-online-934.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "holographic"){
       mumaker.textpro(
            "https://textpro.me/holographic-3d-text-effect-975.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "magma"){
       mumaker.textpro(
            "https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "matrix"){
       mumaker.textpro(
            "https://textpro.me/matrix-style-text-effect-online-884.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "neon"){
       mumaker.textpro(
            "https://textpro.me/neon-text-effect-online-879.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "sketch"){
       mumaker.textpro(
            "https://textpro.me/create-a-sketch-text-effect-online-1044.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "scifi"){
       mumaker.textpro(
            "https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "papercut"){
       mumaker.textpro(
            "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "thunder"){
       mumaker.textpro(
            "https://textpro.me/online-thunder-text-effect-generator-1031.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
    } else if (cmdn === "thunder2"){
       mumaker.textpro(
            "https://textpro.me/create-thunder-text-effect-online-881.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
     } else if (cmdn === "wall"){
       mumaker.textpro(
            "https://textpro.me/break-wall-text-effect-871.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
} else if (cmdn === "transformer"){
       mumaker.textpro(
            "https://textpro.me/create-a-transformer-text-effect-online-1035.html",
            [`${text}`]
          )
          .then((data) =>{
       dsan.sendMessage(m.from, {
      image: {
        url: data
      },
      caption: `Made by *NekoSenpai*`
      })}).catch((err) => console.log(err));
      }
    } catch (error) {
      console.log(error)
      }
   }
 }

