function problem4(word) {
  var answer;
  let arr = []; 
  for(let i=0; i<word.length; i++){
    console.log(word.charCodeAt(i))
    if(word.charCodeAt(i)>=65 && word.charCodeAt(i)<=90){
      arr[i]=String.fromCharCode(155-word.charCodeAt(i))
    }
    else if(word.charCodeAt(i)>=97 && word.charCodeAt(i)<=122){
      arr[i]=String.fromCharCode(219-word.charCodeAt(i))
    }
    else arr[i] = String.fromCharCode(word.charCodeAt(i))
  }
  answer=arr.join("");
  return answer;
}

module.exports = problem4;