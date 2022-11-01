function problem4(word) {
let ascii="";
let answer = "";
for(let i=0; i<word.length; i++)//문자열 길이만큼 순회
{
  ascii = word.charCodeAt(i); //문자열 값을 아스키코드로 치환
  if(65<=ascii && ascii<=90) //소문자일 경우
  {
    ascii = 155-ascii
  }
  else if(97<=ascii && ascii<=122) //대문자일 경우
  {
    ascii = 219-ascii
  }
  answer += String.fromCharCode(ascii); //다시 문자열로 변환후 정답으로 입력
}
  return answer;
}


module.exports = problem4;

