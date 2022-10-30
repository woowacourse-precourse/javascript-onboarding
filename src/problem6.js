function problem6(forms) {
  const map = new Map();
  const set = new Set();

  forms.map(el=>{
    const [email, nick] = el;

    for(let i=0;i<nick.length-1;i++){
      const nick2 = nick.slice(i, i+2);
      console.log(nick2)
      if(map.has(nick2)){
        if(map.get(nick2).includes(email) === false)
          map.get(nick2).push(email);
      }
      else
        map.set(nick2, [email]);
    }
  })

  map.forEach((emails)=>{
    if(emails.length > 1)
      emails.map(el=>set.add(el));
  })

  return Array.from(set).sort();
}

module.exports = problem6;
