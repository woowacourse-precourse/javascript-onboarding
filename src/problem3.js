function problem3(number) {
  var answer;
  let arr = [];
  for (let i=1; i<number+1; i++) {
    arr[i] = i;
  }
  arr = arr.join('');
  arr = [...arr];
  answer = arr.filter(n => n == 3 || n == 6 || n == 9).length;
  
  return answer;
}

module.exports = problem3;
