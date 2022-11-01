function findLargest(arr) {
  let compare = [];
  let i = 0;
  while (i < arr.length) {
    let newArr = arr[i].toString().split("");
    newArr = newArr.map(Number);
    let numAdd = 0;
    let numMultiply = 1;
    numAdd = newArr.reduce((previousElement, currentElement) => previousElement + currentElement, numAdd);
    numMultiply = newArr.reduce((previousElement, currentElement) => previousElement * currentElement, numMultiply);
    compare.push(numAdd);
    compare.push(numMultiply);
    i++;
    }
    compare.sort((a, b) => b - a);
    return compare[0];
  }




module.exports = problem1;