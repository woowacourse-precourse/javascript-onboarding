function problem4(word) {
  var answer;
  return answer;
}

function changeAlphabet(alphabet){
  const frogDiction = {
    'A':'Z','B':'Y','C':'X','D':'W',
    'E':'V','F':'U','G':'T','H':'S',
    'I':'R','J':'Q','K':'P','L':'O',
    'M':'N','N':'M','O':'L','P':'K',
    'R':'I','S':'H','T':'G','U':'F',
    'V':'E','W':'D','X':'C','Y':'B',
    'Z':'A',}
  let chagedAlphabet = alphabet
  if(alphabet.charCodeAt(0) > 96 && alphabet.charCodeAt(0) < 123){
    chagedAlphabet = frogDiction[chagedAlphabet.toUpperCase()];
    return chagedAlphabet.toLowerCase();
  }else{
    return frogDiction[chagedAlphabet];
  }
}

module.exports = problem4;