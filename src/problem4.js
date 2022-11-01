function problem4(word) {
  const dictionary = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ];

  const findABC = (element) => {
    for(let i=0; i<dictionary.length; i++){
      if(element === dictionary[i]) return dictionary[25-i];
    }
  }

  const treeFrog = word.split('').map(el => {
    if(el !== " ") el = findABC(el.toUpperCase());
    return el;
  }).join('');
  console.log(treeFrog);

  return treeFrog;
}
problem4("I love you");

module.exports = problem4;
