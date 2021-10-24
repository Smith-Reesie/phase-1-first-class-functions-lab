// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    return [drivers[0], drivers[1]]
}

function returnLastTwoDrivers(drivers) {
return drivers.slice(-2)
    
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareTripler = createFareMultiplier(3)
const fareDoubler = createFareMultiplier(2)


function createFareMultiplier(initial) {
    return function(secondNumber) {
        return initial * secondNumber
    }
}
function selectDifferentDrivers(drivers, func) {
    return func(drivers)
}