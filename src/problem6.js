function problem6(forms) {
  
  const checkArray = Array(forms.length).fill(false);
  const map = new Map();
  const Answer = [];  

  for ( let i = 0 ; i < checkArray.length ; i++) {
    for( let j = 1 ; j <= forms[i][1].length - 1; j++ ) {
      if(map.has(forms[i][1][j - 1]+forms[i][1][j])){
        map.set(forms[i][1][j - 1]+forms[i][1][j], map.get(forms[i][1][j - 1]+forms[i][1][j])+1);
      }
      else map.set(forms[i][1][j - 1]+forms[i][1][j], (map.get(forms[i][1][j - 1]+forms[i][1][j])||0)+1);  
    }
  }

  for(let [key,val] of map){
    if(1 < val){
      for( let i = 0 ; i < forms.length; i++){
        if(forms[i][1].includes(key) && !checkArray[i]) {
          Answer.push(forms[i][0]);
          checkArray[i] = true;
        } 
      }
    }  
  }
  
  return Answer.sort();
}

module.exports = problem6;
