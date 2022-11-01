function problem6(forms) {
  let answer = [];
  let obj = {};

  const func = (str) => {
    for (let i = 0; i < str.length - 1; i++) {
      let temp = str[i] + str[i + 1];
      if (obj.hasOwnProperty(temp)) {
        obj[temp] = obj[temp] + 1;
      } else {
        obj[temp] = 1;
      }
    }
  };

  for (let d of forms) {
    if (d.length <= 1) continue;
    func(d[1]);
  }
  console.log(obj);

  let arr = [];
  //obj
  for (let key in obj) {
    if (obj[key] !== 1) arr.push(key);
  }
  console.log("=====================================================");
  console.log(arr);

  const check = (str) => {
    for (let value of arr) {
      if (str.includes(value)) return true;
    }
    return false;
  };

  //arr
  for (let d of forms) {
    if (d.length <= 1) continue;
    if (check(d[1])) answer.push(d[0]);
  }

  console.log("=====================================================");
  console.log(answer);
  console.log("=====================================================");
  console.log(answer.sort());
  // answer = answer.sort()
  return answer.sort();
}

module.exports = problem6;

// problem6([ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ])
