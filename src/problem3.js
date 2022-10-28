function problem3(number) {
  let answer = 0;
  for(i=1; i <= number; i++){
    //3,6,9를 골라내기 위해 문자로 변경한 후, 정규표현식을 사용하여 3,6,9가 들어간 수를 찾는다 
    let current = i.toString().match(/[3+6+9]/g)
    //들어간 갯수만큼 answer에 더해준다
    if(current){
      answer += current.length;
    }
  }
  return answer;
}

module.exports = problem3;
