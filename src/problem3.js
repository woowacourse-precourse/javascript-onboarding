function countClap(number) {
  let count = 0;
  let numList = [...number];
  numList.forEach(num => {
    if (['3', '6', '9'].includes(num))
      count += 1;
  });
  return count;
}

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
