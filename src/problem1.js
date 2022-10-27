function exceptionHandle(arr){
  if(arr[1]-arr[0] !== 1) return -1;
  if(arr[0] < 1 || arr[1] > 400) return -1;
  if(arr[0] % 2 === 0 || arr[1] % 2 === 1) return -1;
}

function calcNum(pageNum){
  let sum = 0;
  let multi = 1;
  const numbers = Array.from(pageNum.toString(), (num) => Number(num));
  
  numbers.map((num) => {
    sum = sum + num;
    multi = multi * num;
  });

  return Math.max(sum,multi);
}

function getMaxNum(arr){
  const leftPage = calcNum(arr[0]);
  const rightPage = calcNum(arr[1]);

  return Math.max(leftPage,rightPage);
}

function problem1(pobi, crong) {
  let answer;
  
  if(exceptionHandle(pobi) === -1 || exceptionHandle(crong) === -1){
    return -1;
  }

  const pobiMaxNum = getMaxNum(pobi);
  const crongMaxNum = getMaxNum(crong);
  
  answer = pobiMaxNum > crongMaxNum ? 1 : pobiMaxNum === crongMaxNum ? 0 : 2;


  return answer
}

(function () {
  const tc = [
    [[97, 98], [197, 198], 0],
    [[131, 132], [211, 212], 1],
    [[99, 102], [211, 212], -1],
  ];

  tc.forEach(([pobi, crong, answer], index) => {
    const result = problem1(pobi, crong);

    if (result === answer) {
      console.log(`${index}: Success`);
      return;
    }

    console.log(`${index}: Failed with res: ${result}, ans: ${answer} `);
  });
})();

module.exports = problem1;
