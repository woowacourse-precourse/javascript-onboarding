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

function problem1(pobi, crong) {
  let answer;
  let pobiLargest = findLargest(pobi);
  let crongLargest = findLargest(crong);
      
  if (pobi.length === 2 && crong.length === 2) {
    if (!pobi.includes([1, 2]) && !crong.includes([1, 2]) && !pobi.includes([399, 400]) && !crong.includes([399, 400])) {
      if (pobi[1] === pobi[0] + 1 && crong[1] === crong[0] + 1) {
        if (pobiLargest > crongLargest) {
          answer = 1;
        } else if (pobiLargest < crongLargest) {
          answer = 2;
        } else {
          answer = 0;
        }
        return answer;
      } else {
        answer = -1;
        return answer;
      }
    }
  }
}


module.exports = problem1;