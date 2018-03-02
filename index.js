// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(driver => driver.toLowerCase())
}

function nameToAttributes(arr) {
  return arr.map(driver => { firstName: arr.split(' ')[0], lastName: arr.split(' ')[1] })
}
