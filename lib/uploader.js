let axios = require('axios')
let BodyForm = require('form-data')
let fs = require('fs')
let { fromBuffer } = require('file-type')
let fetch = require('node-fetch')

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://graph.org/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://graph.org" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

module.exports = {TelegraPh}