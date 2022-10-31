function problem3(number) {
  var answer;
  let arr = [];
  for (let i=1; i<number+1; i++) {
    arr[i] = i;
  }
  arr = arr.join('');
  return answer;
}

module.exports = problem3;
