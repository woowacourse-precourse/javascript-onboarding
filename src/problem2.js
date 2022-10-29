 function problem2(cryptogram) {
   var answer = "";

   for (let i = 0; i < cryptogram.length; i++) {
     if (cryptogram[i] !== cryptogram[i + 1]) {
       answer += cryptogram[i]
     } else if (cryptogram[i] === cryptogram[i + 1]) {
       answer = cryptogram.replace(cryptogram.substr(i, 2), '')
       return problem2(answer)
     }
   }
   return answer
 }
 // browoan
 // brow oan oo mm n

 module.exports = problem2;