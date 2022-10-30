let subnamesWithMails = {};

const saveMailForEverySubname = (mail, name) => {
  // do something
}

function problem6(forms) {
  subnamesWithMails = {};

  for(let i = 0; i < forms.length; i++){
    const [mail, name] = forms[i];
    saveMailForEverySubname(mail, name);
  }

  const mailSet = new Set();

  for(const subname in subnamesWithMails){
    if(subnamesWithMails[subname].length < 2) continue;
    subnamesWithMails[subname].forEach((mail) => {
      mailSet.add(mail);
    })
  }
  const result = [...mailSet];
  result.sort();
  
  return result;
}

module.exports = problem6;
