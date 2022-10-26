const DICTIONARY = new Map();

function problem4(word) {
  let answer = "";
  let len = word.length;

  initMap();

  for(let i = 0; i < len; i++) {
    
    let char = word[i];

    // 공백 continue
    if(char == " ") {
      answer += char;
      continue;
    }

    // 대문자 / 소문자 구별
    if(char == char.toUpperCase()) {
      // 대문자 
      answer += DICTIONARY.get(char);
    } else if(char == char.toLowerCase()) {
      // 소문자이면
      answer += DICTIONARY.get(char.toUpperCase()).toLowerCase();
    }
  }
  
  return answer;
}

function initMap() {
  DICTIONARY.set('A', 'Z');
  DICTIONARY.set('B', 'Y');
  DICTIONARY.set('C', 'X');
  DICTIONARY.set('D', 'W');
  DICTIONARY.set('E', 'V');
  DICTIONARY.set('F', 'U');
  DICTIONARY.set('G', 'T');
  DICTIONARY.set('H', 'S');
  DICTIONARY.set('I', 'R');
  DICTIONARY.set('J', 'Q');
  DICTIONARY.set('K', 'P');
  DICTIONARY.set('L', 'O');
  DICTIONARY.set('M', 'N');
  DICTIONARY.set('N', 'M');
  DICTIONARY.set('O', 'L');
  DICTIONARY.set('P', 'K');
  DICTIONARY.set('Q', 'J');
  DICTIONARY.set('R', 'I');
  DICTIONARY.set('S', 'H');
  DICTIONARY.set('T', 'G');
  DICTIONARY.set('U', 'F');
  DICTIONARY.set('V', 'E');
  DICTIONARY.set('W', 'D');
  DICTIONARY.set('X', 'C');
  DICTIONARY.set('Y', 'B');
  DICTIONARY.set('Z', 'A');
}

console.log(problem4("I love you"));
module.exports = problem4;
