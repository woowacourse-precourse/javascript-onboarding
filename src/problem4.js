let lowerword = 'abcdefghijklmnopqrstuvwxyz'
let upperword = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function problem4(word) {
  let a= convert(lowerword);
  let b= convert(upperword);
  let result = ''
  for(let i = 0;i<word.length;i++){
    if(a[0].includes(word.charCodeAt(i))){
      result += String.fromCharCode(a[1][a[0].indexOf(word.charCodeAt(i))])

    }
    else if(b[0].includes(word.charCodeAt(i))){
      result += String.fromCharCode(b[1][b[0].indexOf(word.charCodeAt(i))])

    }
    else if(word.charCodeAt(i)=== 32){
      result +=' '
    }
    else{
      
    }
  }
  return result 
}


function convert(data){
  let result1 = []
  let result2 = []
  for(let i =0; i<data.length; i++){
    result1.push(data.charCodeAt(i));
  }
  result2= [...result1].reverse();
  return [result1,result2]
}

module.exports = problem4;
