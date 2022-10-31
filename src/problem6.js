function problem6(forms) {
  
  const answer =[];
  let namearray =[],
      duplicate =[];
  const twoword =[];

  for ( let i=0; i<forms.length; i++){
    let arr = [];
    const [email, nickname] = forms[i];
    for (let v = 0; v<nickname.length-1; v++){
      arr.push(nickname.slice(v,v+2));
    };
    namearray.push(arr);
  };

  for ( let i=0; i<namearray.length; i++){
    for( let v=0; v<namearray[i].length; v++){
      twoword.push(namearray[i][v]);
    };
  };

  for ( let i=0; i<twoword.length; i++){
    const m = twoword[i];
    for( let v=i+1; v<twoword.length; v++){
      if(m == twoword[v]) duplicate.push(twoword[v]);
    };
  }; 

  const Duplicate = [...new Set(duplicate)];

  for ( let i=0; i<forms.length; i++){
    let arr = [];
    const [email, nickname] = forms[i];
    for (let v = 0; v<nickname.length-1; v++){
      arr.push(nickname.slice(v,v+2));
    };
    for ( word of arr){
        if(Duplicate.includes(word)) answer.push(email);
    };   
  };

  return answer.sort(); 
}

module.exports = problem6;
