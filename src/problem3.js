const threeSixNine = [3, 6, 9];

function problem3(number) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    const nums = String(i).split("");
    nums.forEach((num) => {
      if (threeSixNine.includes(Number(num))) answer++;
    });
  }

  return answer;
}

/*
// for test 
const numbers = [13, 33];

for (number of numbers) {
  console.log(problem3(number));
}
*/

module.exports = problem3;
