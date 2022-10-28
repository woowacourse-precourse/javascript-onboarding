function problem6(forms) {
  
}


module.exports = problem6;

const twoStringHash = (forms) => {
  const nicknames = forms.map(form => form[1]);
  const hash = {};

  nicknames.forEach((nickname, i) => {
    let set = new Set();

    for (let j = 0; j < nickname.length - 1; j++) {
      const two = nickname[j] + nickname[j+1];
      set.add(two);
    }
    
    set.forEach(v => {
      if (hash[v]) {
        hash[v]++;
      } 
      else {
        hash[v] = 1;
      }
    });
  });
  return hash;
}
