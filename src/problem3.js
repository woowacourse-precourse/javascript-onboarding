function problem3(number) {
  let sum = "";
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  const newArr = sum.split("");
  const threeSum = newArr.reduce((cnt, ele) => cnt + ("3" === ele), 0);
  const sixSum = newArr.reduce((cnt, ele) => cnt + ("6" === ele), 0);
  const nineSum = newArr.reduce((cnt, ele) => cnt + ("9" === ele), 0);

  var answer = threeSum + sixSum + nineSum;

  return answer;
}

module.exports = problem3;
