function splitName(forms) {
  let namesArr = [];

  for(let i=0; i<forms.length; i++) {
    let arr = [];
    let name = forms[i][1];
    for (let j = 0; j < name.length - 1; j++) {
      arr.push(name.slice(j, j + 2));
    }
    namesArr.push(arr);
  }

  return namesArr;
}

function nameCount(namesArr) {
  let obj = {};

  for (let i = 0; i < namesArr.length; i++) {
    for (let j = 0; j < namesArr[i].length; j++) {
      let name = namesArr[i][j];
      if (obj.hasOwnProperty(name)) {  // obj에 키가 있을 경우
        obj[name] += 1;
      } else obj[name] = 1;  // obj에 키가 없을 경우
    }
  }

  return obj;
}

function findDuplicate(nameCountObj) {
  let arr = [];
  for(let key in nameCountObj) {
    if (nameCountObj[key] >= 2) {
     arr.push(key);
    }
  }
  return arr;
}

function problem6(forms) {
  let namesArr = splitName(forms);
  let nameCountObj = nameCount(namesArr);
  let duplicate = findDuplicate(nameCountObj);
  let result = [];

  // 중복되는 문자열 포함하고 있는 크루의 이메일 구하기
  namesArr.forEach((element, i) => {
    for(let j = 0; j<duplicate.length; j++)
      if (element.includes(duplicate[j])) 
        result.push(forms[i][0]);
  });

  return result.sort();
}

module.exports = problem6;
