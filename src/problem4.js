function problem4(word) {
  let frogWord = []
  
  word.split('').map(word => word).forEach(word => {
    if (word !== ' ') frogWord.push(frogDictionary[word])
    else frogWord.push(' ')
  })

  answer = frogWord.join('')
  return answer;
}

const frogDictionary = {
  'A': 'Z',
  'a': 'z',
  'B': 'Y',
  'b': 'y',
  'C': 'X',
  'c': 'x',
  'D': 'W',
  'd': 'w',
  'E': 'V',
  'e': 'v',
  'F': 'U',
  'f': 'u',
  'G': 'T',
  'g': 't',
  'H': 'S',
  'h': 's',
  'I': 'R',
  'i': 'r',
  'J': 'Q',
  'j': 'q',
  'K': 'P',
  'k': 'p',
  'L': 'O',
  'l': 'o',
  'M': 'N',
  'm': 'n',
  'N': 'M',
  'n': 'm',
  'O': 'L',
  'o': 'l',
  'P': 'K',
  'p': 'k',
  'Q': 'J',
  'q': 'j',
  'R': 'I',
  'r': 'i',
  'S': 'H',
  's': 'h',
  'T': 'G',
  't': 'g',
  'U': 'F',
  'u': 'f',
  'V': 'E',
  'v': 'e',
  'W': 'D',
  'w': 'd',
  'X': 'C',
  'x': 'c',
  'Y': 'B',
  'y': 'b',
  'Z': 'A',
  'z': 'a'
}

module.exports = problem4;
