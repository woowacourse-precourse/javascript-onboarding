//2글자 이상 연속 중복되는 글자 있는지 확인해주는 함수
//중복o - 연속 중복 구간의 시작 글자 return
//중복x - false return
const checkCyrp=(cyrp)=>{
  for(let i=0; i<cyrp.length-1; i++){
      if (cyrp[i]===cyrp[i+1]){
          return cyrp[i];
      }
  }
  return false;
}
//중복 구간 확인 + 삭제 task 반복
//아직 세부적인 수정 필요 !
function problem2(cryptogram){
  let regex;
  let word = checkCyrp(cryptogram);
  while(word){
      regex = new RegExp(`${word}${word}+`, 'g');
      cryptogram = cryptogram.replace(regex, '')
      word = checkCyrp(cryptogram)
  }
  return cryptogram;
}

module.exports = problem2;
