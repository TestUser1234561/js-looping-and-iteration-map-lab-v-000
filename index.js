// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(driver => driver.toLowerCase())
}

function nameToAttributes(arr) {
  let test = arr.map((driver) => {
    return {
      'firstName' : driver.splice(' ')
    }
  })
  let test = '123'
  console.log(test)
}
