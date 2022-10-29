//예외사항
function exception(cryptogram) {
  let check_cryptogram_lower = new RegExp("^[a-z]*$");
  if (check_cryptogram_lower.test(cryptogram) == false) {
    return false;
  }
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return false;
  }
  return true;
}

//배열 순차적으로 돌면서 연속되는 글자를 찾은 후 delete_keywords 배열에 담기
function searchDeleteKeywords(cryptogram) {
  let delete_keywords = [];
  let before_character = "";
  cryptogram.map((character) => {
    if (character == before_character) {
      delete_keywords.push(character);
    }
    before_character = character;
  });

  delete_keywords = new Set(delete_keywords);
  delete_keywords = [...delete_keywords];

  return delete_keywords;
}

//연속되는 중복 글자 제거
function removeConsecutiveDuplicates(delete_keywords, decryptogram) {
  delete_keywords.map((delete_keyword) => {
    let reg = delete_keyword + "{2,}";
    let regexAllCase = new RegExp(reg, "gi");
    decryptogram = decryptogram.replace(regexAllCase, "");
  });
  return decryptogram;
}

//복호화
function decryption(cryptogram) {
  let delete_keywords = [0];
  let decryptogram = cryptogram;
  while (delete_keywords.length > 0) {
    cryptogram = Array.from(cryptogram);
    delete_keywords = searchDeleteKeywords(cryptogram);
    decryptogram = removeConsecutiveDuplicates(delete_keywords, decryptogram);
    cryptogram = decryptogram;
  }
  return decryptogram;
}

function problem2(cryptogram) {
  if (exception(cryptogram) == false) {
    return "제한사항을 지켜주세요.";
  }
  return decryption(cryptogram);
}
module.exports = problem2;
