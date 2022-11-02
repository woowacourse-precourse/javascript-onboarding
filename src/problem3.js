function countClaps(i) {
  const target = "369";
  const claps = [...String(i)].filter(num => target.includes(num)).length 

  return claps;
}

function problem3(number) {
  let cnt = 0;

  for (let i = 1; i <= number; i++) {
    cnt += countClaps(i)
  }

  return cnt;
}

// console.log(problem3(13))
// console.log(problem3(33))

module.exports = problem3;
