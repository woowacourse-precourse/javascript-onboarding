function problem4(word) {
  var answer ="";
  let a ="a".charCodeAt(0);
  let z ="z".charCodeAt(0);
  let A ="A".charCodeAt(0);
  let Z ="Z".charCodeAt(0);
  for(let i =0;i<word.length;i++){
    let ch = word.charCodeAt(i);
    if(ch >=a && ch <= z){
    	ch = a + (25 - (ch - a))
    	answer+=String.fromCharCode(ch);
    	continue;
    }
    if(ch >= A && ch <= Z){
    	ch = A + (25 - (ch - A))
    	answer+=String.fromCharCode(ch);
    	continue;
    }
    answer+=word[i];
  }
  return answer;
}

module.exports = problem4;
