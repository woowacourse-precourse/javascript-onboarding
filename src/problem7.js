const { assertModuleDeclaration } = require("@babel/types");

function problem7(user, friends, visitors) {
  var answer;
  console.log("값확인",friends)
  console.log("값확인",user)

  const peple = []
  for (p = 0; p < friends.length ; p++) { 
    for (q = 0 ; q < friends[p].length; q++){
      peple.push(friends[p][q])
    }
  }
  console.log("사람수 확인",peple)
  //추천친구 배열 만들기
  
  const arr = []
  let nums = 0

  for (i = 0;  i < peple.length ; i ++) {
    arr.push([peple[i],nums])
  }
  console.log("점수배열 이름",arr)
  //[[추천친구],[점수]]배열 만들기

  for ( k = 0 ; k < arr.length ; k++){
    if( arr[k][0] == user) {
      arr.splice(k,1)
    } 
  } console.log("유저이름 제외",arr)
  //친구리스트 유저이름 제외

  for ( l = 0 ; l < arr.length ; l++){
    const arr_2 = arr[l][0]
    for(m = l+1; m < arr.length; m++) {
      if(arr_2 == arr[m][0]) {
        arr.splice(m,1)
      }
    } 
  } console.log("중복이름 제외_1",arr)
}
  //중복 이름 삭제

  /*for( i = 0 ; i < arr.length ; i++) {
    const arr_1 = arr[i][0];
    
    for(j = i+1; j < arr.length; j++) {
      if(arr_1 == arr[j][0]) {
        arr[i][1] += 10
      }
    } 
  }console.log("중복친구 점수 + 10",arr)
  //중복 인자 갯수 * 10 점수에 더하기


  
  for( n = 0 ; n < arr.length ; n++) {
    const arr_1 = arr[n][0];
    
    for(o = n+1; o < arr.length; o++) {
      if(arr_1 == visitors[o]) {
        arr[i][1] += 1
      }
    } console.log("한자리점수 확인",arr)
  

  //중복 이름 + visitors 내 중복 인자 확인
  //중복인자 확인 된 숫자 * 1 점수에 더하기
  //[점수]배열 기준 오름차순 배열 만들기
  //[추천친구] 이름 도출 
  return answer;*/

module.exports = problem7;