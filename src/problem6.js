function problem6(forms) {

  let result = [];
  let str = {};

  forms.forEach((e) => {
    let name = e[1];
    let email = e[0];

    for (let i = 0; i < name.length - 1; i++){
      let str2 = name[i];
      for (let j  = i + 1; j < name.length; j++){
        str2 += name[j];
        if(str[str2]){
        str[str2] = [email, ...str[str2]];
        } else {
          str[str2] = [email];
        }
      }
    }
  });

  Object.values(str).forEach((e) => {
    e.length >= 2 ? result.push(...e) : null;
  });
  let res_set = new Set(result);
  result = [...res_set].sort();
  return result;


}

module.exports = problem6;
