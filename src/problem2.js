
function problem2(cryptogram) {
  var answer = deletWord(cryptogram);
 // console.log(answer);
  return answer;
}
function deletWord(str){
  let start = findIndex(str);
  while(start != -1){
  let word =  str[start]+str[start+1];
  str = str.replace(word, "");
  start = findIndex(str);
  }
  return str;
}
function findIndex(str){
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i+1]){
      return i;
    }
  }
  return -1;
}
/* 분명 내가 생각해서 쓴 코드인데 왜 돌아가는지 모르겠다.
ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 돌아가는게 정상이긴 한데 왜 돌아가지?
이거보다 더 좋은 알고리즘이 분명 있는데 java나 c가 아닌 js로 표현하는게 어려웠다.
중복되는 문자열을 지우기 위해 여러 함수중 replace를 선택한 것은 다른 것은 잘린 문자열을 기준으로
앞뒤 모두 구해서 붙여야하는데 이경우 따질 경우가 너무 많아졌기 때문이다. 그래서 연속되는 문자만
""로 대체 할 수 있도록 replace를 작성했다! 돌아가니까 성공!
*/
module.exports = problem2;
