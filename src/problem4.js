/* ### 제한사항
  - word는 길이가 1 이상 1,000 이하인 문자열이다.
  - 알파벳 외의 문자는 변환하지 않는다.
  - 알파벳 대문자는 알파벳 대문자로, 알파벳 소문자는 알파벳 소문자로 변환한다.
*/

function problem4(word) {

  // 청개구리 사전 만들기 - 1. 준비단계
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";       // 알파벳
  var input_code = code.split('');               // 윗  줄 알파벳 대문자 배열
  var output_code = code.toLowerCase();          // 아랫줄 알파벳 소문자 배열
  var output_code = [...output_code].reverse();  // 아랫줄 순서 역순으로 변경

  // 청개구리 사전 만들기 - 2. 합치기
  var dictionary = [input_code,output_code]; // 2차원 배열로 합치기

  // word 문자열을 배열로 변환
  var input_word = [...word];   // 입력된 word를 공백이 포함된 배열로 변환.
  var upperWord = [...word.toUpperCase()]; // 대소문자 비교를 위한 배열도 생성

  // 청개구리 사전으로 번역될 문자를 담을 빈 배열 생성
  var change = new Array;

  // 청개구리 사전으로 바꾸기
  for(var i=0; i<input_word.length; i++){ // 입력받은 문자 개수를 전부 확인해야
    
    // i순서에 해당하는 문자를 point에 담음 
    var point = input_word[i].toUpperCase();     // (ex. 0번쨰가 I일때)
    // 해당 문자가 어디에 위치했는지 확인
    var pointer = dictionary[0].indexOf(point);  // (ex. I는 사전에서 8번째 위치하고 있고)

    // 공백 포함하기
    if(pointer == -1){           // 만약 찾는 값이 -1 이라면 (-1은 없는 경우 뜸)
      var change_Word = " ";     // 공백을 만들어
      change.push(change_Word);  // 배열에 추가해줌
    }
    // 공백이 아니라면
    else {
      // 청개구리로 번역하기                 
      var change_Word = dictionary[1][pointer];  // (ex. I는 r로 바꾼다)
      // 번역된 문자 담기
      change.push(change_Word);
    }
    // console.log("----------------------------------------------"); 
    // console.log(i+"번째로 들어온 word : "+ point);
    // console.log("사전에서 "+ word[i]+" 위치 찾기 : "+pointer); // 8위치를 찾음
    // console.log("청개구리 번역 결과 : "+ change_Word); // 청개구리 사전에 맞춰 문자 바꾸기 I -> r로
  }

  // 원문과 비교했을때 대소문자도 반전해줘야함.
  for(var j=0; j<input_word.length; j++){

    // 만약 word가 대문자인 문자열과 비교했을때, 동일한 대문자를 가졌다면
    if(input_word[j] == upperWord[j]){

      // input_word의 대문자 위치와 동일한 chage의 문자를 대문자로 바꾼다.
      var t = change[j] || '';
      // TypeError : Cannot read properties of undefined (reading 'toUpperCase')
      // 나의 경우 문자열이 아닌 배열의 인덱스를 호출할려고 해서 오류가 난 것 같음.
      // 오류를 해결하려면 값을 빈 문자열로 초기화 하거나 문자열에 대한 메서드를 호출해야함
      // 나의 경우 거짓값을 저장하는경우 논리 OR 연산자를 사용하여 폴백을 함

      // 소문자에서 대문자로 변환
      change[j] = t.toUpperCase(); 
    }
  }
  
  // 최종 결과값 도출
  var answer = change.join(''); // join을 통해 배열을 문자열로 변환
  console.log(answer);

  return answer;
}

module.exports = problem4;
