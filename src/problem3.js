function splitStr(str) {
  const re = /3|6|9/;
  return str.split(re);
}
function problem3(number) {
  var answer;
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += splitStr(i.toString()).length - 1;
  }
  return (answer = sum);
}

console.log(problem3(13));
console.log(problem3(33));
module.exports = problem3;
