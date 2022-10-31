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
    if(eng.test(word[i])===false){
      result += word[i]
    } 
  } return result;


}

module.exports = problem4;
