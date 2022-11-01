function problem4(word) {
  const alphabetList = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];
  
  let result = "";
  const eng =/[a-zA-Z]/ ;
  for(let i =0;i<word.length;i++){
    // 알파벳 이외 문자는 그대로 변환
    if(eng.test(word[i])===false){
      result += word[i]
    // 대문자 처리
    } else if (word[i] === word[i].toUpperCase()){
      let index = alphabetList.indexOf(word[i]);
      
      result += alphabetList[25-index];
    // 소문자 처리
    } else if(word[i] === word[i].toLowerCase()){
      let index2 = alphabetList.indexOf(word[i].toUpperCase());
      result += alphabetList[25-index2].toLowerCase();

    } 
  } return result;


}


module.exports = problem4;
