/*
  1. "browoanoommnaon" -> browoan (oomm) naon
  2. "browoannaon"     -> browoa (nn) aon
  3. "browoaaon"       -> browo (aa) on
  4. "browoon"         -> brow (oo) n
  5. "brown"
  -------------------------------------------------
  암호문 해독 방법 : 문자열에서 연속하는 중복 문자를 삭제
*/

function problem2(cryptogram) {

  var answer; // result 결과값이 될 변수

  // [제한사항]
  // (1) cryptogram은 알파벳 소문자로만 이루어져있다.
  var text_small = cryptogram.toLowerCase(); // toLowerCase()를 사용하여 문자열을 소문자로 변환
  // console.log(text_small);
  
  // (2) cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
  var text_split = text_small.split(''); // split을 이용해서 text_small의 문자열을 음절단위로 쪼개서 배열을 만듬
  text_split = text_split.slice(0, 1000); // 길이가 1000이 넘으면 뒷부분은 삭제

  // [중복값 제거] (스택이용)
  var removal=[]; // 빈 스택을 하나 생성
  for(var i = 0; i < text_split.length; i++) { // 암호의 길이만큼 for문으로 중복된 값을 제거할 것.
    if(!removal.length || removal[removal.length - 1] !== text_split[i]) {
      // 스택에 있는 값과 비교할 대생이 같은 경우 스택에서 제거
        removal.push(text_split[i]);
    } else {
        // 다를 경우 추가
        removal.pop();
    }
  }

  answer = removal.join(''); // 배열 -> 문자열로 변환
  console.log(answer);
  
  return answer;
}

module.exports = problem2;
