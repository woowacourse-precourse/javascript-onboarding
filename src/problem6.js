function problem6(forms) {
  const group = new Map();
  const answer = new Set();
  
  for(let form of forms){
    for (let i = 0; i < form[1].length - 1; i++){
      let str = form[1].slice(i, i + 2);
      if (group.has(str)) {
        let newUsers = group.get(str);
        newUsers.push(form[0]);
        group.set(str, newUsers);
        break;
      } else {
        group.set(str, [form[0]]);
      }
    }
  }

  for (let users of group) {
    if (users[1].length >= 2) {
      for (let user of users[1]) 
        answer.add(user);
    }
  }

  return [...answer].sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
  })
}

module.exports = problem6;