const divideByDigit = (number) => {
  for(let i=number; i!=0; i=parseInt(i/10)) {
    let n = i%10;
  }
}

function problem3(number) {
  for (let i=1; i<=number; i++) {
    divideByDigit(i);
  }
  return answer;
}

problem3(13);

module.exports = problem3;
