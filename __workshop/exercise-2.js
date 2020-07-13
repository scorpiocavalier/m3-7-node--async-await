// Exercise 2 - `getIssPosition`
// -----------------------------

const request = require('request-promise')

const getIssPosition = async () => {

  const baseUrl = 'http://api.open-notify.org/iss-now.json'

  try {
    const response = await request(baseUrl)
    const issLocation = await JSON.parse(response)
    const { latitude, longitude } = issLocation.iss_position
    return { lat: Number(latitude), lng: Number(longitude) }
  } catch (err) {
    console.log('Error: ', err)
  }
}

getIssPosition().then(position => console.log(position))
