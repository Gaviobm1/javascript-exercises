const palindromes = function (string) {
    let newString = string.replaceAll(', ', '').replaceAll(' ', '').replaceAll('.', '').replace('!','').replace('?','').toLowerCase();
    const arr1 = Array.from(newString);
    const arr2 = Array.from(newString).reverse();
    const compare = (a, b) => a.length === b.length && a.every((element, index) => element === b[index])
    return compare(arr1, arr2)
  }

// Do not edit below this line
module.exports = palindromes;
