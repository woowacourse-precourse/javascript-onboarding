function convertByDict(word_arr,dictionary){
  for(let i=0;i<word_arr.length;i++)
  {     
    let key = word_arr[i].toUpperCase()
    if(Object.keys(dictionary).includes(key)){
        word_arr[i] = dictionary[key]
    }
  }
  return word_arr;
}

function problem4(word) {
  let answer;
  let word_arr = [...word]
  const dictionary = {
    'A':'Z','B':'Y','C':'X','D':'W',
    'E':'V','F':'U','G':'T','H':'S',
    'I':'R','J':'Q','K':'P','L':'O',
    'M':'N','N':'M','O':'L','P':'K','Q':'J',
    'R':'I','S':'H','T':'G','U':'F',
    'V':'E','W':'D','X':'C','Y':'B','Z':'A'
  }
  word_arr = convertByDict(word_arr,dictionary);
  return answer;
}

module.exports = problem4;
