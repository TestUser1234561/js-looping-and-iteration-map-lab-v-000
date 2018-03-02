// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(driver => driver.toLowerCase())
}

function nameToAttributes(arr) {
  console.log( arr.map((driver) => {
    return {
      'firstName' : driver.splice(' ')
    }
  })
}
