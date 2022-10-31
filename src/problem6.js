function problem6(forms) {
  let check = {};
  let result = {};
  let email = [];

  function abc (a, b) {
    if (b.length == 0) {
      return
    }

    let string = ""; 
    
    check[a].forEach((s) => {
      string += s;
      let mail;
      if (string.length >= 2) {
        mail = find(string, b);       
        string = s;
      };
      
      if (mail != null) {
        result[mail] = 1;
        result[a] = 1;
      }

    });
  }

  function find (string, li) {
    for(let i = 0; i < li.length; i++) {
      let sl = "";
      let list = check[li[i]];

      for (let j = 0; j < list.length; j++) {
        sl += list[j];
        if (sl.length >= 2) {
          if (string == sl) {
            return li[i];
          }

          sl = list[j];
        }
      }
    }
    return null;
  }

  forms.forEach((element) => {
    let name = [];
    [...element[1]].forEach((val) => {
      name.push(val);
    });
    
    check[element[0]] = name;
    email.push(element[0]);
    name = []
  });
  
  const len = email.length;
  
  email.forEach((s,a) => {
     abc(s, email.slice(a+1, len))
  });
  
  const answer = Object.keys(result);
  console.log(answer);
  return answer.sort();
}


problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
])
module.exports = problem6;
