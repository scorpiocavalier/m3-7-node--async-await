const request = require('request-promise')
const endpoint = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    "Accept": "application/json"
  },
  json: true
}

const getTronaldDumpQuote = async () => request(endpoint)

getTronaldDumpQuote().then(quote => console.log(quote.value))