// Exercise 3
// ----------

// 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier )
// 2. returns the double of the num
const doublesLater = num => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(2 * num), 2000)
    reject('I could not double this number.')
  })
}

// 3. handleSum function (async/await)
const handleSum = async num => {
  try {
    const doubled_1 = await doublesLater(num)
    const doubled_2 = await doublesLater(doubled_1)
    const doubled_3 = await doublesLater(doubled_2)
    return doubled_1 + doubled_2 + doubled_3
  } catch (err) { 
    console.log(err) 
  }
}

// 4. verification
handleSum(10).then(ans => console.log(ans))