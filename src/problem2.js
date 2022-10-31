function problem2(cryptogram) {
  let anwser = cryptogram;

  while (findDupStr(anwser).length !== 0) {
    findDupStr(anwser).map((str) => {
      anwser = dupStrDelete(anwser, str);
    });
  }

  return anwser;
}

//기능 1. 중복 문자열 찾기
function findDupStr(str) {
  let dupStrArr = [];
  //문자열 반복문
  [...str].forEach((char) => {
    const regex = new RegExp(`${char}{2,}`);
    dupStr = str.match(regex);
    if (dupStr !== null) {
      if (!dupStrArr.includes(dupStr[0])) dupStrArr.push(dupStr[0]);
    }
  });
  return dupStrArr;
}

//기능 2. 중복 문자열 제거
function dupStrDelete(str, char) {
  const arr = str.split(char);
  console.log(arr);
  return arr[0].concat(arr[1]);
}

module.exports = problem2;
