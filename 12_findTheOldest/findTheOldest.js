const findTheOldest = function(arr) {
    const current = new Date()
    const oldest = arr.sort((a, b) => {
    const firstGuy = a.yearOfDeath - a.yearOfBirth || current.getFullYear() - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth || current.getFullYear() - b.yearOfBirth;
    return firstGuy > nextGuy ? -1 : 1;

   })
return oldest[0];
};

// Do not edit below this line
//module.exports = findTheOldest;
