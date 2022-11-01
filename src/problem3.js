// 배달이가 좋아하는 369게임을 하고자 한다. 놀이법은 1부터 숫자를 하나씩 대면서, 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9의 개수만큼 손뼉을 쳐야 한다.

// 숫자 number가 매개변수로 주어질 때, 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return 하도록 solution 메서드를 완성하라.

function cnt_clap(number) {
  let numStr = number.toString();
  let numArr = Array.from(numStr);
  let cnt = 0;
  for (let i = 0; i < numArr.length; i++){
     if(Number(numArr[i])%3 == 0 && Number(numArr[i]) != 0){
       cnt += 1;
     }
    // if(numArr[i] == '3'){
    //   cnt += 1;
    // } else if(numArr[i] == '6'){
    //   cnt += 1;
    // } else if (numArr[i] == '9'){
    //   cnt += 1;
    // } 
  }

  return cnt;  
}

//console.log(cnt_clap(33));

function problem3(number) {

  var answer = 0;
  for (let i = 1; i <=number; i++){
      answer += cnt_clap(i);
  }
  return answer;
}

module.exports = problem3;
