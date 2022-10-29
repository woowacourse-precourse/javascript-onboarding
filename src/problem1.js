function problem1(pobi, crong) {
  var answer;

  const pobi_nums = calc(pobi);
  const crong_nums = calc(crong);
  
  return answer;
}

function calc(name) {
  const arr = [];
  for (let i = 0; i < name.length; i++) {
    const nums = String(name[i]).split('').map(x => +x);
    arr.push(nums.reduce((a, b) => a + b));
    arr.push(nums.reduce((a, b) => a * b));
  }
  return arr;
}

module.exports = problem1;