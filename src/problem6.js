function problem6(forms) {
  const set = new Set();

  forms.forEach(([email, nickname],index) => {
    for(let i = index; i <forms.length - 1; i++) {
      for(let j = 0; j < nickname.length - 1; j++) {
        const letters = nickname.split('').slice(j,j+2).join('');

        if(forms[i+1][1].includes(letters)) {
          set.add(email);
          set.add(forms[i+1][0]);
        }
      }
    }
  })

  return [...set].sort((a, b) => {
    let strA = a.toString();         
    let strB = b.toString();
    return strA.localeCompare(strB)
  });
}

module.exports = problem6;
