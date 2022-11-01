function problem2(cryptogram) {
  var answer;
  const spell = cryptogram.split("");
  
  let i = 0;
  
  while (i < spell.length) {
  if (spell[i] === spell[i + 1] && spell[i] === spell[i + 2]) {
  spell.splice(i, 3);
  i = -1; 
  }
  else if (spell[i] === spell[i + 1]) {
  spell.splice(i, 2);
  i = -1;
  }
  i++;
  }
  
  answer = spell.join("");
  return answer;
}
  
module.exports = problem2;