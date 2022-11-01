function problem2(cryptogram) {

  var answer = cryptogram.split("").reduce((acc,cur)=> {
    if (acc[acc.length-1] === cur){
      acc = acc.substring(0, acc.length-1)
    } else {
      acc += cur
    }
    return acc
  })

  return answer;
}



module.exports = problem2;
