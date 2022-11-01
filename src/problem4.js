function problem4(word) {
  var reverse=[];
  let str = [...word];

  for(let i = 0; i<str.length; i++){
    if(str[i] === " ")
    {
      reverse.push(str[i]); // 공백일 때는 공백 그대로
      continue;
    }
    else
    {
      const AsciiNum = str[i].charCodeAt(0);
      if(AsciiNum >=65 && AsciiNum <=90){ // 청개구리 사전대로 변경
        change = String.fromCharCode(155 - AsciiNum);
      }else{
        change = String.fromCharCode(219 - AsciiNum);
      }
      reverse.push(change);
    }
  }
  const answer = reverse.join("");   
  return answer;
}

module.exports = problem4;
