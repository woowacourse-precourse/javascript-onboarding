function problem3(number) {

var answer=0;
var temp = [0,0,0,0];

//반복문을 통해 number의 각 자리수 별로 temp배열에 값 추가
  for(let i=1; i<=number; i++) {
    temp[0] = i % 10;
    temp[1] = Math.floor(i / 10);
    temp[2] = Math.floor(i / 100);
    temp[3] = Math.floor(i / 1000);

    //각 자리수에 3, 6, 9가 있다면 answer에 1씩 더함.
    for(let j=0; j<temp.length; j++) {
        if(temp[j] ==3 || temp[j] ==6 || temp[j] ==9) {
            answer +=1;
        }
    }
  }
return answer;
}

module.exports = problem3;