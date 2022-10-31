function problem6(forms) {
  let result = [];
  let obj = {};
  forms.forEach((el) => {
    let basename = el[1];
    let email = el[0];
    for (let i = 0; i < basename.length - 1; i++) {
      let str = basename[i];
      for (let k = i + 1; k < basename.length; k++) {
        str += basename[k];
        if (obj[str]) {
          obj[str] = [email, ...obj[str]];
        } else {
          obj[str] = [email];
        }
      }
    }
  });
  Object.values(obj).forEach((el) => {
    el.length >= 2 ? result.push(...el) : null;
  });
  let res_set = new Set(result);
  result = [...res_set].sort();
  return result;
}

module.exports = problem6;
