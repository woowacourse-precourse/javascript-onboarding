function problem2(cryptogram) {

  let cryptogramList = Array.prototype.slice.call(cryptogram);
  const count=cryptogramList.length/2

  let current=count*2

  for (let j=0;j<Math.ceil(count);j++)
  {
      let prev= current
      current=oneCycle(cryptogramList)
      if (prev ==current)
          break
  
  }

  var answer= cryptogramList.join("");
  return answer;
}


function oneCycle(cryptogramList){
  for (let i=0;i<cryptogramList.length;i++){
  
      if (i == 0){
          prev=0;
          continue;
      }
      if (cryptogramList[i]==cryptogramList[prev])
      {
          cryptogramList.splice(prev,2)
          console.log(cryptogramList)
          i=i-2
          prev=i-1
      }
      else{
          prev=i
      }
  }

  return cryptogramList.length

}

module.exports = problem2;
