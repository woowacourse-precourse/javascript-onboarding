function problem4(word) {
  try{
    //예외사항 처리
    //입력의 데이터 타입이 숫자가 아닌 경우
    if(typeof word !== "string") throw new TypeError("입력의 데이터 타입이 문자열이 아닙니다.");

    //입력의 범위가 1 ~ 10,000이 아닌 경우
    if(word.length < 1 || word.length > 10000) throw new RangeError("입력문자열의 길이가 1 ~ 10,000을 벗어났습니다.");

    //청개구리 변환
    let answer = '';
    for(let i = 0; i < word.length; i++){
      //알파벳 외의 문자는 변환하지 않는다.
      if(!/[a-z|A-Z]/.test(word[i])){
        answer += word[i];
        continue;
      }

      let temp = ''; //변환 문자
      //소문자인 경우
      if(word[i].charCodeAt(0) >= 'a'.charCodeAt(0) && word[i].charCodeAt(0) <= 'z'.charCodeAt(0)){
        temp = String.fromCharCode('z'.charCodeAt(0) + 'a'.charCodeAt(0) - word[i].charCodeAt(0)); //청개구리 변환
      }
      //대문자인 경우
      else {
        temp = String.fromCharCode('Z'.charCodeAt(0) + 'A'.charCodeAt(0) - word[i].charCodeAt(0)); //청개구리 변환
      }
      answer += temp;
    }
    
    return answer;
  }
  catch(e){
    return e;
  }
}
module.exports = problem4;
