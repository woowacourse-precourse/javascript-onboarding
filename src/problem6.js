const deepClone = (obj) => {
  if (!(obj instanceof Object)) return obj;
  const Constructor = obj.constructor;
  let clone = new Constructor();

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = typeof value === "object" ? deepClone(value) : value;
    }
  });

  return clone;
};

const isValidCrewNum = (crewNum) => crewNum >= 1 && crewNum <= 10000;

const isValidNaming = ({ email, name }) => {
  const emailRegExp = /^[\w]+@email.com$/g;
  const nameRegExp = /^[ㄱ-ㅎ가-힣]+$/g;
  if (!emailRegExp.test(email) || !nameRegExp.test(name)) return false;
  return true;
};

const getSubStringArr = (name) =>
  [...name].reduce((acc, _, idx, src) => {
    if (src[idx + 1]) return [...acc, src.slice(idx, idx + 2).join("")];
    return acc;
  }, []);

const isDuplicated = (str, dictionary) => !!dictionary[str];

const addNewEmail = ([str, email], dictionary) => {
  if (!dictionary[str]) dictionary[str] = [email];
  else dictionary[str] = [...dictionary[str], email];
};

const addDuplicatedEmail = ([email, name], dictionary) => {
  const clone = deepClone(dictionary);

  getSubStringArr(name).forEach((str) => {
    if (isDuplicated(str, clone)) {
      clone[str] = [...clone[str], email];
    } else {
      addNewEmail([str, email], clone);
    }
  });
  return clone;
};

const getDuplicatedNicknameArr = (dictionary) => {
  const newSet = new Set();
  Object.values(dictionary).forEach((valueArr) => {
    if (valueArr.length > 1)
      [...new Set(valueArr)].forEach((value) => newSet.add(value));
  });
  return [...newSet];
};

function problem6(forms) {
  if (!isValidCrewNum(forms.length)) return -1;
  let dictionary = {};

  forms.forEach(([email, name]) => {
    if (isValidNaming({ email, name })) {
      const newDictionary = addDuplicatedEmail([email, name], dictionary);
      dictionary = newDictionary;
    }
  });

  return getDuplicatedNicknameArr(dictionary).sort();
}

module.exports = problem6;
