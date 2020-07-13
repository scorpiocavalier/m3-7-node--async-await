const { getDadJoke }          = require('./__workshop/exercise-4.1')
const { getTronaldDumpQuote } = require('./__workshop/exercise-4.2')
const { getGeekJoke }         = require('./__workshop/exercise-4.3')

const handleJoke = async (req, res) => {
  const { type } = req.params
  let data

  switch(type) {
    case "dad": 
      data = await getDadJoke()
      res.send(data.joke)
      break;
    case "tronald": 
      data = await getTronaldDumpQuote()
      res.send(data.value)
      break;
    case "geek":
      data = await getGeekJoke()
      res.send(data.joke)
      break;
    default:
      res.send("Unrecognized joke type.")
  }
}

module.exports = { handleJoke }