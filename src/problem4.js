function problem4(word) {
  if(exception) return false;
  return checkuplow;
}

const input ={
  maxlength:1000, minlength:1
}
const Frog={
  Uppercase:[
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ],
  Lowercase:[
    'a','b','c','d','e','f','g','h',
    'i','j','k','l','m','n','o','p',
    'q','r','s','t','u','v','w','x',
    'y','z'
  ],
  Upperreverse:[
    'Z', 'Y', 'X', 'W', 'V', 'U',
    'T', 'S', 'R', 'Q', 'P', 'O',
    'N', 'M', 'L', 'K', 'J', 'I',
    'H', 'G', 'F', 'E', 'D', 'C',
    'B', 'A'
  ],
  Lowerreverse:[
    'z', 'y', 'x', 'w', 'v', 'u',
    't', 's', 'r', 'q', 'p', 'o',
    'n', 'm', 'l', 'k', 'j', 'i',
    'h', 'g', 'f', 'e', 'd', 'c',
    'b', 'a'
  ]
}

function checkuplow(alphabet){
  let result = '';
  const alphabetArr=Array.from(alphabet);
  for(let i=0; i<alphabetArr.length; i++){
    if(wonder[i] ===' '){
      result += '';
    }
    else if(alphabetArr[i] === alphabetArr[i].toUpperCase()){
      result += uppercasd(alphabet[i]);
    }
    else if(alphabet[i] === alphabet[i].toLowerCase()){
      result += lowercase(alphabet[i]);
    }
  }
  return result;
}

function upperCase(word){
  return Frog.upperReverse[FROG.uppercase.indexOf(word)];
}

function lowerCase(word){
  return Frog.lowerReverse[FROG.lowercase.indexOf(word)];
}

function exception(word){
  if(word>maxlength || word<minlength) return true;
  return false;
}
module.exports = problem4;
