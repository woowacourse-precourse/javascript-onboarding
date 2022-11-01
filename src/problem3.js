const checkNumber = (number) => {
  switch (number){
    case 3:
    case 6:
    case 9:
      return 1;
  }
  return 0;
}

const divideByDigit = (number) => {
  let count = 0;
  for(let i=number; i!=0; i=parseInt(i/10)) {
    let n = i%10;
    count += checkNumber(n);
  }
  return count;
}

function problem3(number) {
  let answer = 0;
  for (let i=1; i<=number; i++) {
    answer += divideByDigit(i);
  }
  return answer;
}

module.exports = problem3;
