function problem3(number) {
  var answer;
  let crap_count = 0;
  //1부터 number까지 반복
  for(let i = 1; i <= number; i++) {
    // 해당 숫자를 글자로 바꾼 후 3,6,9 가 있을시 crap으로 바꿔줌
    let change_crap = String(i).replace(/[3,6,9]/g,"crap");
    //crap을 찾은만큼 배열로 반환
    let crap = change_crap.match(/crap/g);
    //crap의 값이 나오기 전엔 null이기 때문에 crap != null을 넣어줌
    if(crap != null){
      // crap이 담긴 배열의 개수를 더해줌
      crap_count = crap.length + crap_count;
    }
  }
  answer = crap_count;
  return answer;
}

module.exports = problem3;
