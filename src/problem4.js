// ASCII 코드
// 대문자 : 65 ~ 90
// 소문자 : 97 ~ 122
// 32 : Space
function problem4(word) {
  const beforeChange = wordToASCII(word);
  let afterChange = "";

  for (item of beforeChange) {
    let item_status = charCase(item);
    if (item_status === 0) afterChange += upperChange(item);
    else if (item_status === 1) afterChange += lowerChange(item);
    else afterChange += " ";
  }

  return afterChange;
}

function wordToASCII(word) {
  // 문자열을 ASCII 코드로 변환하는 함수.
  let arrayASCII = [];
  for (item of word) arrayASCII.push(item.charCodeAt(0));
  return arrayASCII;
}

function charCase(item) {
  // 해당하는 문자가 대문자면 0, 소문자면 1, Space면 2를 return.
  if (item >= 65 || item <= 90) return 0; // 대문자면 0을 return
  else if (item >= 97 || item <= 122) return 1; // 소문자면 1을 return
  else return 2; // space면 2를 return
}

function upperChange(item) {
  // 대문자일때 반대로 변환하는 함수.
  const weight = item - 65;
  const convert_num = 90 - weight;
  return String.fromCharCode(convert_num);
}

function lowerChange(item) {
  // 소문자일때 반대로 변환하는 함수.
  const weight = item - 97;
  const convert_num = 122 - weight;
  return String.fromCharCode(convert_num);
}
module.exports = problem4;
