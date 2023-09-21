

const add = function(a, b) {
  a += b;
  return a;
  
};

const subtract = function(a, b) {
	a -= b;
  return a;
};

const sum = function(items) {
  if (items.length == 0) {
    return 0;
  }
  else {const sumUp =items.reduce((total, item) => total + item, 0); 
        return sumUp;
  
  }
};


const multiply = function(items) {
const multiplies = items.reduce((a, b) => a*b);
return multiplies

};

const power = function(a, b) {
  const c = a ** b;
  return c
	
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
 const arr = []
 for (let i = 1; i <= a; i++) {
      const nums = arr.splice(0, 0, i)
 }
 const result = arr.reduce((total, num)=> total*num);
 return result;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
