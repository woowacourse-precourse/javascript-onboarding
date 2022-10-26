function problem4(word) {
  var answer;
  for (let i=0; i<word.length;i++){
    if (word.charCodeAt(i)==32){
      continue;
    }
    else if (65<=word.charCodeAt(i)<=90){

    }
    else if (97<=word.charCodeAt(i)<=122){

    }
  } 
  return answer;
}
module.exports = problem4;
