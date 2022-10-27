function problem2(cryptogram) {
  //필요함수

  //#1. 글자가 주어지면 중복된 글자를 제거한 새로운 글자를 반환하는 함수
    // 1번 함수를 재귀적으로 적용할 예정
      // 해당 함수의 break 포인트 필요

  function RETURN_REMOVE_DUPLICATION_ALPHABET(word) {
    const alphabetList = word.slice().split("");
    const newAlphabetList = [];
    let newWord;
    for (let i = 0; i < alphabetList.length; i++) {
      if (
        alphabetList[i] !== alphabetList[i + 1] &&
        alphabetList[i] !== alphabetList[i - 1]
      ) { newAlphabetList.push(alphabetList[i]); }}
    newWord = newAlphabetList.join("");
    if (word === newWord) { return word; }
    return RETURN_REMOVE_DUPLICATION_ALPHABET(newWord);
  }


  

  //특이사항

  //!1. 글자의 길이는 1이상 1000이하

  function CHECK_WORD_LENGTH_BETWEEN_ONE_TO_THOUSAND (word){
    if(word.length < 1 || word > 1000){
      return false;
    } return true;
  }

  //!2. 글자는 알파벳 소문자로만 이루어져 있음.

  function CHECK_WORD_IS_ALL_LOWERCASE (word) {
    for(let i of word){
      if(i !== i.toLowerCase()){
        console.log(i)
        return false;
      }  
    }
    return true;
  }


  return RETURN_REMOVE_DUPLICATION_ALPHABET(cryptogram);
}

module.exports = problem2;
