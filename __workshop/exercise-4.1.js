const request = require('request-promise');
const options = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    "Accept": "application/json"
  },
  json: true
}

// getDadJoke
const getDadJoke = async () => request(options)

// 4.1
getDadJoke().then(data => console.log(data.joke))
