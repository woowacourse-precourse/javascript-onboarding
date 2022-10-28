const INPUT = {
  Max: 10000,
  Min: 1,
};

const clapTime = val => val === '3' || val === '6' || val === '9';

// 1의 자리수 분리하기
function divideNum(number) {
  const countNumArr = number.toString().split("");
  
  return countNumArr.filter(clapTime).length;
}

// 뒷자리 3, 6, 9에 손뼉치기
function countClap(number) {
  let clap = 0;
  for(let i=1; i<number+1; i++) {
    if (divideNum(i)) {
      clap = clap + divideNum(i);
    }
  }
  return clap;
}

// 예외상황
function exception(number) {
  if (number < INPUT.Min || number > INPUT.Max) return true;
  return false;
}

function problem3(number) {
  if(exception(number)) return false;
  console.log(countClap(number));
  return countClap(number);
}

module.exports = problem3;