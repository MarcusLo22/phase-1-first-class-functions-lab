// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
  console.log(returnFirstTwoDrivers(drivers)); // Output: ['Antonia', 'Nuru']

  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    }
  }
  const doubleFare = createFareMultiplier(2);
console.log(doubleFare(10)); // Output: 20

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    return driverSelector(arrayOfDrivers);
  }

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ['Amari', 'Mo']