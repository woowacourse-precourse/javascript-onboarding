let subnamesWithMails = {};

const saveMailForEverySubname = (mail, name) => {
  for(let i = 0; i < name.length - 1; i++){
    const subname = name.slice(i, i+2);
    if(subnamesWithMails[subname] === undefined){
      subnamesWithMails[subname] = new Set([mail])
    } else {
      subnamesWithMails[subname].add(mail);
    }
  }
}

function problem6(forms) {
  subnamesWithMails = {};

  for(let i = 0; i < forms.length; i++){
    const [mail, name] = forms[i];
    saveMailForEverySubname(mail, name);
  }

  const mailSet = new Set();

  for(const subname in subnamesWithMails){
    if(subnamesWithMails[subname].size < 2) continue;
    subnamesWithMails[subname].forEach((mail) => {
      mailSet.add(mail);
    })
  }
  const result = [...mailSet];
  result.sort();
  
  return result;
}

module.exports = problem6;
