//문제 1번 기능목록
//1. 
function gameScore(page){
  var pageAdd = 0; //
  var pageMulti = 1; //각 자리 숫자를 모두 곱한 결과
  var tmp = String(page);
    
  for (var i = 0; i < tmp.length; i++) {
    pageAdd += parseInt(tmp[i]); //각 자리 숫자 모두 더하기
    pageMulti *= parseInt(tmp[i]); //각 자리 숫자 모두 곱하기
  }

  return (pageAdd >= pageMulti ? pageAdd : pageMulti);
  
}

function problem1(pobi, crong) {
  var answer;
  //홀짝 체크
  if (pobi[0] % 2 != 1 || crong[0] % 2 != 1){ //왼쪽 페이지는 항상 홀수
    console.log("not odd");
    return -1
  }
  else if (pobi[1] % 2 != 0 || crong[1] % 2 != 0){ //오른쪽은 항상 짝수여야 함.
    console.log("not even");
    return -1
  }
  //시작 면(1,2), 마지막 면(399,400)은 못 펼치는 것이 규칙.
  //왼쪽 페이지는 3 이상 397 이하의 범위를 가짐. 
   //오른쪽 페이지는 4 이상 398 이하의 범위를 가짐. 
   //(포비, 크롱 둘다 체크)
  else if ((pobi[0] < 3 || pobi[0] > 397) && (pobi[1] < 4 || pobi[1] > 398)) {
    console.log("pobi range error");
    return -1
  
  }  
  else if ((crong[1] < 3 || crong[1] > 397) && (crong[1] < 4 || crong[1] > 398) ) {
    console.log("crong range error");
    return -1
  
  }
  //왼쪽 페이지 + 1 = 오른쪽 페이지 
  else if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) {
      console.log("left plus 1 should be right");
      return -1
    
  }
  var pobi_left = gameScore(pobi[0]);
  var pobi_right = gameScore(pobi[1]);
  var crong_left = gameScore(crong[0]);
  var crong_right = gameScore(crong[1]);
  //console.log(pobi_left, pobi_right);
  //console.log(crong_left, crong_right);
  const pobi_score = (pobi_left >= pobi_right ? pobi_left : pobi_right)
  const crong_score = (crong_left >= crong_right ? crong_left : crong_right)
  
  try {  
    if (pobi_score > crong_score) answer = 1;
    else if (pobi_score < crong_score) answer = 2;
    else answer = 0;
  } catch (err) {
    console.log(err);
    answer = -1;
  }
  return answer;
}

//console.log("1st case: ",problem1([399,400], [197, 198]));

//console.log("2nd case: ",problem1([131,132], [211, 212]));

//console.log(problem1([99, 102], [211, 212]));
module.exports = problem1;
