function problem1(pobi, crong) {
  var answer;
  
  // 각 캐릭터의 페이지가 정상적으로 잘 나왔는지 체크
  function pageCheck(character) {
    let check = 0;
  
    // 펼친 페이지 수가 1~400 인가?
    if((character[0] >= 1 && character[0] <= 400) && (character[1] >= 1 && character[1] <= 400)) {
      // 각각의 페이지 번호 홀수, 짝수가 맞는가?
      if((character[0] % 2 == 1) && (character[1] % 2 == 0)) {
        // 왼쪽 페이지의 값과 오른쪽 페이지의 값이 순서대로 잘 맞는가?
        if(character[0] - character[1] == -1) {
          check = 1;
        }
      }
    }
  
    // 위의 세가지 조건이 맞았으면 1 아니면 0 리턴
    if(check) { return 1; }
      else { return 0; }
  }
  
  const pobi_check = pageCheck(pobi);
  const crong_check = pageCheck(crong);
  
  const check_result = pobi_check + crong_check == 2 ? 1 : 0;
  
  // 각 자리수 덧셈, 곱셈 후 -> 큰 값 리턴
  
  function AddMulHandler(character) {
    let add = [0, 0];
    let mul = [1, 1];
    let max = [];
    for(let i=0; i<character.length; i++) {
      do {
        add[i] += character[i]%10;
        mul[i] *= character[i]%10;
        character[i] = Math.floor(character[i]/10);
      } while(character[i] > 0)
  
      if(add[i] > mul[i]) { max.push(add[i]); }
        else { max.push(mul[i]) }
    }
  
    if(max[0] > max[1]) { return max[0]; }
      else { return max [1]; }
  }
  
  const pobi_Result = AddMulHandler(pobi);
  const crong_Result = AddMulHandler(crong);
  
  // 최종 결과
  function LastResult(pobi, crong, check) {
    if(check) {
      if(pobi > crong) { return 1; }
        else if(pobi < crong) { return 2; }
          else if(pobi==crong) { return 0; }
    } else { return -1; }
  }
  
  const last_Result = LastResult(pobi_Result, crong_Result, check_result)
  
  var answer = last_Result;
  return answer;
}

module.exports = problem1;