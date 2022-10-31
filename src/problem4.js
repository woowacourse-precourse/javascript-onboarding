function problem4(word) {
  return word.split('').map((el)=>{
    const alph = el.charCodeAt(0);
    if(alph>=65 && alph<=90){
      return lowFrog(alph);
    }else if(alph>=97 && alph<=122){
      return upFrog(alph);
    }else return String.fromCharCode(alph);
  }).join('');
}

function lowFrog(alph){
  if(alph<=77){
    return String.fromCharCode(90-(alph-65));
  }else{
    return String.fromCharCode(65+(90-alph));
  }
}

function upFrog(alph){
  if(alph<=109){
    return String.fromCharCode(122-(alph-97));
  }else{
    return String.fromCharCode(97+(122-alph));
  }
}

module.exports = problem4;
