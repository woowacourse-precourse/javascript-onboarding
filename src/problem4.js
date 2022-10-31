function problem4(word) {
  let temp=[]
  let reverseTemp=[]
  // 임시 배열에 아스키코드 값을 넣어둠
  for(let i=0;i<word.length;i++){
    temp.push(word.charCodeAt(i))
  }
  // A-Z의 아스키코드값을 더하면 155, a-z의 아스키코드값을 더하면 219
  // 이를 이용해서 임시배열 원소에서 뺀값을 배열에 넣어줌
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
  // 문자로 변환시킨 후에 리턴
  reverseTemp.forEach((e)=>{
    ans.push(String.fromCharCode(e))
  })
  return ans.join('')
}

module.exports = problem4;
