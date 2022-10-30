function problem6(forms) {
  var answer;

  for(let i=0; i < forms.length; i++) {
    const [email, nickname] = forms[i];
    for(let x=0; x < nickname.length; x++) {
      for(let y=x+1; y < nickname.length; y++) {
        const str = nickname.slice(x, y+1);
        
      }
    }
  }
  
  return answer;
}

module.exports = problem6;
