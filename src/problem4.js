function problem4(word) {
  var answer="";


  for(let i=0; i<word.length;i++){
    let x=word.charCodeAt(i);
    if(x>=97 && x<=122 ){
      answer= answer+ String.fromCharCode(219-x);
    }
    else if(x>=65 && x<=97){
      answer= answer+ String.fromCharCode(155-x);
    }
    else answer= answer+String.fromCharCode(x);
  }

  return answer;
}

module.exports = problem4;
