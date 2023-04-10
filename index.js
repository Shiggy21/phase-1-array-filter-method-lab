// Code your solution here
const findMatching = (drivers, string) => {
   return drivers.filter(drivers => drivers.toUpperCase() === string.toUpperCase())
}

const fuzzyMatch = (name, string) => {
    return name.filter(name => name.charAt(0) === string.charAt(0))
}

const matchName = (driver, string) => { 
    return driver.filter(driver => driver.name === string)
}