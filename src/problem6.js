function problem6(forms) {
  
  let namearray =[];

  for ( let i=0; i<forms.length; i++){
    let arr = [];
    const [email, nickname] = forms[i];
    for (let v = 0; v<nickname.length-1; v++){
      arr.push(nickname.slice(v,v+2));
    };
    namearray.push(arr);
  };

}

module.exports = problem6;
