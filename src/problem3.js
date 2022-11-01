function problem3(number) {
  var answer;

  let hit_sum = 0;
  for(let i=1; i<=number; i++)
    hit_sum = hit_sum + Cal369Hit(i);
  
  answer = hit_sum;
  return answer;
}

//숫자 하나를 입력값으로, 현재 숫자에서 박수를 몇회 쳐야하는지를 결과값으로 반환
function Cal369Hit(num){
  let hit = 0;
  num = num.toString();
    
  for(let i=0; i<num.length; i++){
    if((num[i] == '3') ||(num[i] == '6')|| (num[i] == '9'))
      hit++;
  }

  return hit;
}

module.exports = problem3;
