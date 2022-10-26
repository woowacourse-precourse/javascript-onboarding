function getKeys(nickname) {
  const arr = [];
  let num = 2;
  while (num <= nickname.length) {
    let cur = 0;
    while (cur + num <= nickname.length) {
      arr.push(nickname.substr(cur, num));
      cur++;
    }
    num++;
  }
  return arr;
}

function problem6(forms) {
  const list = {};
  forms.map((form) => {
    getKeys(form[1]).map((key) => {
      if (key in list) list[key].push(form[0]);
      else list[key] = [form[0]];
    });
  });
  console.log(
    Object.values(list).reduce((result, data) => {
      if (data.length > 1) return result.concat(data);
      return result;
    }, [])
  );
  console.log(list);
}

module.exports = problem6;
