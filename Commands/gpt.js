
const { Configuration, OpenAIApi } = require("openai");
const OPENAIAPI = process.env.OPENAIAPI
const permission = process.env.PERMOPEN || true;

module.exports = {
  name: "chatgpt",
  alias: ['ai','gpt'],
  desc: "Hentai picture of animal waifus", 
  category: "chat gpt",
  react: "🍁",
  async execute(dsan,args, m) {
if(permission == true) {
const configuration = new Configuration({
      apiKey: OPENAIAPI,
    });
    const openai = new OpenAIApi(configuration);

    if (OPENAIAPI == null) {
      return m.reply(
        "Please put your OpenAI API Key in the *.env* or in *Configuration* file !"
      );
    }
if (!args) {          
          return m.reply(`Please provide a message!`);
}     
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        async function generateResponse(prompt, retries = 2) {
          try {
            const completion = await openai.createChatCompletion({
              model: "gpt-3.5-turbo",
              messages: [{ role: "user", content: prompt }],
            });

            return completion.data.choices[0].message.content.trim();
          } catch (error) {
            if (
              error.response &&
              error.response.status === 429 &&
              retries > 0
            ) {
              const retryAfter =
                error.response.headers["retry-after"] * 1000 || 5000;
              m.reply(
                `Rate limit exceeded. Retrying in ${
                  retryAfter / 1000
                } seconds...`
              );
              await sleep(retryAfter);
              return generateResponse(prompt, retries - 1);
            } else {
              console.error(error);
              
              return "Error occurred while generating response - API usage limit exceeded or wrong API key.";
            }
          }
        }
  generateResponse(args)
          .then((response) => {
            return dsan.sendMessage(m.from, { text: response }, { quoted: m });
          })
          .catch((error) => {
            console.error("Error getting response:", error);
          });
   } else {
  m.reply("This BotIs Not GPT-3.5 Enabled!!")
   }
}
  }

