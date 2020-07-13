const request = require('request-promise');
const endpoint = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    "Accept": "application/json"
  },
  json: true
}

// getDadJoke
const getDadJoke = async () => request(endpoint)

// getDadJoke().then(data => console.log(data.joke))

module.exports = { getDadJoke }