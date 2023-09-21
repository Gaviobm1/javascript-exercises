const sumAll = function(num, num2) {
    let sumArr = [];

    if (typeof num == "number" && typeof num2 == "number") {

    if (num < 0 || num2 < 0) {
        return "ERROR";
}
    else if (num < num2) {
    for (let i = num; i <= num2; i++) {
        sumArr.push(i);
        
    }
    let sum = 0;
    sumArr.forEach(item => {
        sum += item
    })
    return sum
}
    else if (num > num2) {
    for (let i = num2; i <= num; i++) {
        sumArr.push(i);
        
    }
    let sum = 0;
    sumArr.forEach(item => {
        sum += item
    })
    return sum

}
    }
    else {
        return "ERROR";
    }

   
}
  

// Do not edit below this line
module.exports = sumAll;
