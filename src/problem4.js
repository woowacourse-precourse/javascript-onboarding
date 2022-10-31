function problem4(word) {
  let ans=[]
  for(let i=0;i<word.length;i++){
    let asc=word[i].charCodeAt(0)
    let tmp=word[i]
    if (asc>=65 && asc<=90){
      tmp=String.fromCharCode([155-asc])
    }
    else if (asc>=97 && asc<=122){
      tmp=String.fromCharCode([219-asc])
    }
    ans.push(tmp)
 }
  return ans.join('');

}

module.exports = problem4;
