function problem4(word) {
  const dictionary = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  const changeReverse = (element) => {
    for(let i=0; i<dictionary.length; i++){
      if(element === dictionary[i]) return dictionary[25-i];
    }
  }

  const treeFrog = word.split('').map(el => {
    if(el === " ") el = " "; 
    else if(el === el.toUpperCase()) el = changeReverse(el);
    else {
      el = changeReverse(el.toUpperCase());
      el = el.toLowerCase();
    } 
    return el;
  }).join('');

  return treeFrog;
}

module.exports = problem4;
