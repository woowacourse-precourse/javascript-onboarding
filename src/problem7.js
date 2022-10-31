function problem7(user, friends, visitors) {
  let obj_friend = {};
  let res = {};
  friends.forEach((el) => {
    if (obj_friend[el[0]]) obj_friend[el[0]] = [el[1], ...obj_friend[el[0]]];
    else {
      obj_friend[el[0]] = [el[1]];
      res[el[0]] = 0;
    }
    if (obj_friend[el[1]]) obj_friend[el[1]] = [el[0], ...obj_friend[el[1]]];
    else {
      obj_friend[el[1]] = [el[0]];
      res[el[1]] = 0;
    }
  });
  visitors.forEach((visitor) => {
    !res[visitor] ? (res[visitor] = 1) : (res[visitor] += 1);
  });
  let list = Object.keys(res);
  list.forEach((el) => {
    if (el !== user && obj_friend[el] !== undefined) {
      obj_friend[el].forEach((friend) => {
        if (obj_friend[user].includes(friend)) res[el] += 10;
      });
    } else if (el === user) {
      if (res[el] !== undefined) delete res[el];
      obj_friend[el].forEach((already) => {
        delete res[already];
      });
    }
  });
  let answer = [];
  for (let name in res) {
    answer.push([name, res[name]]);
  }
  answer = answer
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      else if (a[1] < b[1]) return 1;
      else {
        if (a[0] < b[0]) return -1;
        else if (a[0] > b[1]) return 1;
        else return 0;
      }
    })
    .map((el) => {
      return el[0];
    })
    .slice(0, 5);
  return answer;
}

module.exports = problem7;
