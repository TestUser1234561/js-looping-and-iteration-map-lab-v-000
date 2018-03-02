// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(driver => driver.toLowerCase())
}

function nameToAttributes(arr) {
  let test = arr.map((driver) => {
    return {
      'firstName' : driver.split(' ')
    }
  })
  console.log(test)
}
