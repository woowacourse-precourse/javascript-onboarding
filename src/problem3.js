function toNum(num) {
  let nArr = [];
  for (let i = 1; i <= num; i++) {
    nArr.push(i);
  }
  return nArr;
}
function counting(num) {
  let count = 0;
  let arr = [];
 
  while (num > 1) {
    arr.push(parseInt(num % 10, 10));
    num /= 10;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3 || arr[i] === 6 || arr[i] === 9) {
      count++;
    }
  }
  return count;
}

function problem3(number) {
  var answer;
  if(number>=1 || number<=10000){
    let arr = toNum(number);
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += counting(arr[i]);
  }
  answer = res;
  }
  else{return null;}
  return answer;
}

module.exports = problem3;
