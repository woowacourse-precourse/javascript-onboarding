function problem4(word) {
  let temp=[]
  let reverseTemp=[]
  for(let i=0;i<word.length;i++){
    temp.push(word.charCodeAt(i))
  }
  temp.forEach((e)=>{
    if(e!==32){
      if(e>90){
        reverseTemp.push(219-e)
      }
      else{
        reverseTemp.push(155-e)
      }
    }
    else{
      reverseTemp.push(e)
    }
  })
  let ans=[]
  reverseTemp.forEach((e)=>{
    ans.push(String.fromCharCode(e))
  })
  return ans.join('')
}

problem4("I love you")
module.exports = problem4;
