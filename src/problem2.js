function problem2(cryptogram) {
var answer;
let ans = Array.from(cryptogram); //문자열을 배열형식으로 변환
let ansarr = []; //빈 스택을 하나 생성
for(i=0; i<ans.length; i++)
{
  if(ansarr.length===0 || ansarr[ansarr.length-1] != ans[i]) //스택이 빌경우 혹은 전값과 다른경우 푸쉬
  {
    ansarr.push(ans[i]);
  }
  else
  {
    ansarr.pop(); //아닐경우 제거
  }
}
answer = ansarr.join(''); //배열 형태를 다시 문자열로 변환
return answer;
}

module.exports = problem2;
