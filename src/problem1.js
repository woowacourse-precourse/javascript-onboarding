function problem1(pobi, crong) {
  var answer = page(pobi,crong);//page의 리턴은 if
  return answer;
}
function sum(n){    //배열의 값을 각각 더하는 함수
  let answer = 0
  n = n.toString()
  for (let i = 0; i < n.length; i++){
    answer += parseInt(n[i])
  }
  return answer; 
}
function multi(n){    //배열의 값을 각각 곱하는 함수
  let answer = 1
  n = n.toString()
  for (let i = 0; i < n.length; i++){
    answer *= parseInt(n[i])
  }
  return answer; 
}
function page(pobi ,crong) {
  const pobisCal = [];
  const crongsCal = [];
  const incorrectCal = [];
  function peopleCalc(k,peopleCal) {
    for (i = 0; i < k.length; i++){
      peopleCal.push(sum(k[i]));
      peopleCal.push(multi(k[i]));
      incorrectCal.push(k[i]);
    };
  }
  new peopleCalc(pobi,pobisCal);
  new peopleCalc(crong,crongsCal);  
  const pobisBigger = Math.max(...pobisCal);
  const crongsBigger = Math.max(...crongsCal);
  
  if (incorrectCal[1] !== incorrectCal[0]+1){
    return -1;
  } else if (pobisBigger === crongsBigger){
    return 0;
  } else if (pobisBigger > crongsBigger) {
    return 1;
  } else if (pobisBigger < crongsBigger) {
    return 2;
  }
}

module.exports = problem1;
