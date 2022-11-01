function problem4(word) {

  const alphaKey={
      'A':'Z','B':'Y','C':'X','D':'W','E':'V','F':'U','G':'T','H':'S','I':'R','J':'Q'	,'K':'P','L':'O','M':'N','N':'M','O':'L','P':'K','Q':'J','R':'I','S':'H','T':'G','U':'F',	
      'V':'E','W':'D', 'X':'C','Y':'B','Z':'A'
  }

  wordList=Array.prototype.slice.call(word);
  let newWordList=[]
  for (let chr of wordList){
  
      if (chr==' ')
          newWordList.push(' ')
      else{
          upperCase= chr.toUpperCase()
          if (chr==upperCase){
              newWordList.push(alphaKey[chr]) 
          }
          else
              newWordList.push((alphaKey[upperCase]).toLowerCase())     
      }
  }

  return newWordList.join("");
}
module.exports = problem4;
