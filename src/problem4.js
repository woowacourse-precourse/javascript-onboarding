//대문자인지 체크하는 함수
const isUpperCase = (string) => /^[A-Z]*$/.test(string);

//소문자인지 체크하는 함수
const isLowerCase = (string) => /^[a-z]*$/.test(string);

//대문자는 대문자로, 소문자는 소문자로 사전 만들기
function makeDict() {
  //알파벳 대문자
  let bigAlphabet = Array.from(Array(26))
    .map((e, i) => i + 65)
    .map((x) => String.fromCharCode(x));

  //알파벳 소문자
  let smallAlphabet = Array.from(Array(26))
    .map((e, i) => i + 97)
    .map((x) => String.fromCharCode(x));

  //대문자 알파벳 뒤집기
  let reverseBigAlphabet = [...bigAlphabet].reverse();

  //소문자 알파벳 뒤집기
  let reverseSmallAlphabet = [...smallAlphabet].reverse();

  //대문자 사전 object 만들기
  let bigDict = bigAlphabet.reduce(
    (dict, alpha, index) => ({ ...dict, [alpha]: reverseBigAlphabet[index] }),
    {}
  );

  //소문자 사전 object 만들기
  let smallDict = smallAlphabet.reduce(
    (dict, alpha, index) => ({ ...dict, [alpha]: reverseSmallAlphabet[index] }),
    {}
  );

  return [smallDict, bigDict];
}

function problem4(word) {
  let [smallDictionary, bigDictionary] = makeDict();
  return [...word]
    .reduce((acc, item) => {
      if (isUpperCase(item)) {
        return [...acc, bigDictionary[item]];
      } else if (isLowerCase(item)) {
        return [...acc, smallDictionary[item]];
      } else {
        return [...acc, item];
      }
    }, [])
    .join("");
}

module.exports = problem4;
