function problem2(cryptogram) {
  function search(s) {
    let first = s[0];
    let result = "";
    
    for(let i = 1; i < s.length; i++) {
      
      if (first === s[i]) {
         
         result = s.slice(0, i-1) + s.slice(i+1, s.length);
         

         return [true, result];
      }else {
        first = s[i];
      }
    }
    return [false, s];
  }
  let li = search(cryptogram);
  while (true) {
    if (li[0] === false) {
      break 
    }else{
      li = search(li[1]);
    }
  }
  return li[1];
  

}

module.exports = problem2;
