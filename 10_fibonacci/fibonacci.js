
const fibonacci = (index) => {
    if (index < 0) {
        return 'OOPS'
    }
    if (isNaN(index)) {
        parseInt(index)
    }
const fib = [0, 1];

for (let i = 2; i <= index; i++) {
    fib[i] = fib[i-2] + fib [i-1]
}

return fib[index]
}

// Do not edit below this line
module.exports = fibonacci;




