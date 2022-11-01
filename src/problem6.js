// @ts-check

/**
 * @param {string} name
 * @returns {string[]}
 */
const separateName = (name) => {
  const arr = [];

  for (let i = 0; i < name.length - 1; i++) {
    arr.push(name[i] + name[i + 1]);
  }

  return arr;
};

/**
 * @param {{[name: string] : string[]}} obj ex) {'제이' : ['email@email.com']}
 * @returns 무슨ㅅ무슨 리턴
 */
const getDuplicate = (obj) => {
  /** @type {string[]} */
  const res = [];

  for (const key in obj) {
    const emailList = obj[key];

    if (emailList.length > 1) {
      res.push(...emailList);
    }
  }

  return [...new Set(res)];
};

/**
 * @param {string[][]} forms ex)["jm@email.com", "제이엠"],
 * @returns {{[name : string] : string[]}}
 */
const getSeparateNameObj = (forms) => {
  /** @type {{[name : string] : string[]}} */
  const obj = {};

  for (const person of forms) {
    const [email, name] = person;
    const names = separateName(name);

    names.forEach((name) => {
      name in obj ? (obj[name] = [...obj[name], email]) : (obj[name] = [email]);
    });
  }
  return obj;
};

function problem6(forms) {
  const separateNameObj = getSeparateNameObj(forms);

  const uniqueArr = getDuplicate(separateNameObj);

  const sortedRes = uniqueArr.sort();

  return sortedRes;
}

module.exports = problem6;
