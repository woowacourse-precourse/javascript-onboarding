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

function checkCase(origin_word,converted_word){
  for(let j=0;j<origin_word.length;j++)
  {
    if(origin_word[j]!=origin_word[j].toUpperCase())
    {
      // 원래 문자가 소문자이면, word_arr 에 있는 것도 소문자로 바꿔줘야 함
      converted_word[j] = converted_word[j].toLowerCase()
    }
  }
  return converted_word;
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
  word_arr = checkCase(origin_word,word_arr);
  return answer;
}

module.exports = problem4;
