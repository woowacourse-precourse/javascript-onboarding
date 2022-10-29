function problem3(number) {
  let answer = 0;
  [...Array(number + 1).keys()].forEach(
    (num) =>  [...String(num)].forEach(
      (digit) => {
        if (digit === '3' || digit === '6' || digit === '9')
         answer ++;
      }
    )
  );
  
  return answer;
  
}

module.exports = problem3;

