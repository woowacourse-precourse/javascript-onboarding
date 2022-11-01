function problem3(number) {
  let count = 0;
  
  let arrStr = String(numToArr(number));
  let strDiv = arrStr.split('');
  for (const element of strDiv)
    if (element == 3 || element == 6 || element == 9){
      count += 1;
    }

  return count;
}

function numToArr(num){
  let numArr = new Array;
  for (let i = 1; i < num + 1; i++){
    numArr.push(i);
  }
  return numArr;
}

module.exports = problem3;

console.log(problem3(13));
console.log(problem3(33));