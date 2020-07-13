const request = require('request-promise');

const endpoint = {
  uri: "https://geek-jokes.sameerkumar.website/api?format=json",
  headers: {
    "Accept": "Application/json"
  },
  json: true
}

const getGeekJoke = async () => request(endpoint)

// getGeekJoke().then(response => console.log(response.joke))

module.exports = { getGeekJoke }