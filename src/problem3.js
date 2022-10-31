function count(n) {
  var result = 0;
  var str = String(n);
  const mapfn = (arg) => Number(arg);
  let arr = str.split('').map(mapfn);

  for(let i = 0; i < arr.length; i++ ) {
    if (arr[i] === 3 || arr[i] === 6 || arr[i] === 9) {
      result += 1;
    } 
  }
  return result
}

function problem3(number) {
  var answer = 0;
  for(let i = 1; i <= number; i++ ) {
    answer += count(i);
  }
  return answer;
}

module.exports = problem3;
