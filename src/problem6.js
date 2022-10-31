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

const isValidLimit = ({ email, name }) => {
  const emailRegExp = /^[\w]{1,9}@email.com$/g;
  const nameRegExp = /^[ㄱ-ㅎ가-힣]{1,19}$/g;
  if (!emailRegExp.test(email) || !nameRegExp.test(name)) return false;
  return true;
};

const getSubStringArr = (name) =>
  [...name].reduce((acc, _, idx, src) => {
    if (src[idx + 1]) return [...acc, src.slice(idx, idx + 2).join("")];
    return acc;
  }, []);

const isDuplicated = (str, dictionary) => !!dictionary[str];

const getNewEmail = ([str, email], dictionary) => {
  // 기능 1: 같은 글자가 연속적으로 포함된 닉네임 선별
  if (isDuplicated(str, dictionary))
    return { ...dictionary, [str]: [...dictionary[str], email] };
  else return { ...dictionary, [str]: [email] };
};

const getDuplicatedEmailObj = ([email, name], dictionary) => {
  let clone = deepClone(dictionary);
  return getSubStringArr(name).reduce(
    (acc, str) => ({ ...acc, ...getNewEmail([str, email], acc) }),
    clone
  );
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

  const dictionary = forms.reduce((acc, [email, name]) => {
    if (isValidLimit({ email, name }))
      return { ...acc, ...getDuplicatedEmailObj([email, name], acc) };
    return acc;
  }, {});

  // 기능 2, 3: 같은 글자를 연속으로 사용한 닉네임을 작성한 지원자의 이메일 목록 추출 및 오름차순 정렬하고 중복 제거
  return getDuplicatedNicknameArr(dictionary).sort();
}

module.exports = problem6;
