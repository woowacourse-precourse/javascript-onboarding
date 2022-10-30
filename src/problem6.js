function problem6(forms) {
  
  const checkArray = Array(forms.length).fill(false);
  const map = new Map();

  for ( let i = 0 ; i < checkArray.length ; i++) {
    for( let j = 1 ; j <= forms[i][1].length - 1; j++ ) {
      if(map.has(forms[i][1][j - 1]+forms[i][1][j])){
        map.set(forms[i][1][j - 1]+forms[i][1][j], map.get(forms[i][1][j - 1]+forms[i][1][j])+1);
      }
      else map.set(forms[i][1][j - 1]+forms[i][1][j], (map.get(forms[i][1][j - 1]+forms[i][1][j])||0)+1);  
    }
  }
  console.log(map);
}

console.log(problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ]))

// module.exports = problem6;
