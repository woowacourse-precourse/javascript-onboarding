const count369 = (arr) => {
  var cnt = 0;
  arr.forEach(element => {
    if (element === '3' || element === '6' || element === '9') cnt += 1;
  });

  return cnt;
}

function problem3(number) {
  var answer = 0;
  var tmp = "";
  var arr = [];
  for(let i=1; i<=number ; i++){
    tmp = i.toString();
    arr = [...tmp];
    answer += count369(arr);
    arr = [];
  }

  return answer;
}

module.exports = problem3;



