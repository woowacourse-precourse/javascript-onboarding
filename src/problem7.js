const { assertModuleDeclaration } = require("@babel/types");

function problem7(user, friends, visitors) {
  var answer;
  console.log("값확인",friends)


  const arr = []
  let nums

  for (i = 1;  i < friends.length ; i ++) {
    arr.push([friends[i][1],nums])
  }
  console.log("점수배열 이름",arr)

  //[[추천친구],[점수]]배열 만들기

  for ( k = 0 ; k < arr.length ; k++){
    if( arr[k][0] = user) {
      arr.pop(arr[k])
    } console.log("유저이름 제외",arr)
  }
  
  /*for (i = 0 ; i < friends.length ; i ++) {
    if(friends[i][1] = friends[i+1][1]) { 
      arr[i][1] += 10
    }
  }
  console.log("중복친구 점수",arr)*/
  
  /*score = []
  for ( i = 0 ; i < friends.length ; i ++) { 
    score.push(friends[i][1])
  }
  
  for ( j = 0 ; j < visitors.length ; j++) {
    score.push(visitors[j])
  }

  console.log("점수배열 이i름",score)
  //[[친구이름],[추천친구]] 추천친구 리스트 먼저 만들기
  score_1 = [...(new Set(score))]

  console.log("점수배열 중복제거",score_1);

  nums = []
  for ( k = 0 ; k < score_1.length ; k++) {
    score_1[k][1] = nums 
  }

  console.log("넘스추가",score_1);*/
  
  //유저 이름 삭제
  //중복 인자 갯수 * 10 점수에 더하기
  //중복 이름 삭제
  //중복 이름 + visitors 내 중복 인자 확인
  //중복인자 확인 된 숫자 * 1 점수에 더하기
  //[점수]배열 기준 오름차순 배열 만들기
  //[추천친구] 이름 도출 
  return answer;
}
module.exports = problem7;