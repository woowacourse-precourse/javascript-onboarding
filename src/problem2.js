function problem2(cryptogram) {
  var answer;
  try{
    //예외사항 처리
    //1) cryptogram의 데이터 타입이 문자열이 아닐때
    if(typeof cryptogram !== "string") throw new TypeError("cryptogram의 데이터 타입이 문자열이 아닙니다.");

    //cryptogram의 길이가 1~1000가 아닌경우
    if(cryptogram.length < 1 || cryptogram.length > 1000) throw new RangeError("cryptogram의 길이가 1이상 1000이하가 아닙니다.");

    //cryptogram이 알파벳 소문자로만 이루어진 문자열이 아닌경우
    if(!/^[a-z]+$/.test(cryptogram)) throw new Error("cryptogram이 알파벳 소문자로만 이루어진 문자열이 아닙니다.");

    //중복문자 삭제
    const n = cryptogram.length;
    
    const stack = [];
    let prev = '';
    //prev : 이전에 원래 존재하던 문자
    //p : 중복 문자열이 삭제되어서 새로 연속하게 된 문자
    for(let i=0; i<n; i++){
      if(stack.length > 0){
        let p = stack[stack.length - 1];
        if(p === cryptogram[i]){
          stack.pop();
          prev = cryptogram[i];
          continue;
        }
      }
      stack.push(cryptogram[i]);
      if(cryptogram[i] === prev) stack.pop();
      prev = cryptogram[i];
    }
    
    return stack.join('');
  }
  catch(e){
    return e;
  }
}

module.exports = problem2;
