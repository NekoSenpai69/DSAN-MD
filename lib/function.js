const axios = require("axios");


exports.getRandom = (Numb) => {
    return `${Math.floor(Math.random() * 10000)}${Numb}`
}

exports.getBuffer = async (url) => {
  try {
      const response = await axios.get(url, {
            responseType: 'arraybuffer'
        })
       return response
   } catch (error) {
     console.log(error);
  }     
}