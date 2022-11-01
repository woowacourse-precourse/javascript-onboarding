function problem4(word) {
  var answer = chageString(word)
  return answer;
}

function chageString(word){
  let chagedString = word.split('').map(c => {
    if(c === ' '){return ' '}
    if(c.charCodeAt(0) > 96 && c.charCodeAt(0) < 123){
      return changeAlphabet(c.toUpperCase()).toLowerCase();
    }else{
      return changeAlphabet(c);
    }
  })
  return chagedString.join('');
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
  return frogDiction[alphabet]
}

module.exports = problem4;