function problem2(cryptogram) {
  let answer;

  const cryptogramArray = cryptogram.split("");
  let decryption = cryptogramArray.reduce(
    function (arr,item){
      arr[arr.length-1]!==item?arr.push(item):arr.pop()
      return arr
    },
    []
  ) 

  answer = decryption.reduce((answer,word)=>answer+word,"")
  return answer;
}



module.exports = problem2;
