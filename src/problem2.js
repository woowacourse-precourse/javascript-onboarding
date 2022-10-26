//중복 제거
function decryption(cryptogram) {
  let before_element = "";
  let delete_char = [0];
  //반복문 지울 글자가 더이상 없으면 종료
  while (delete_char.length > 0) {
    delete_char = [];
    let copy_cryptogram = cryptogram;
    //문자열 카피 후 배열로 만듬
    copy_cryptogram = Array.from(copy_cryptogram);
    //배열 순차적으로 돌면서 연속되는 글자를 찾은 후 delete_char 배열에 담기
    copy_cryptogram.map((element) => {
      if (element == before_element) {
        delete_char.push(element);
      }
      before_element = element;
    });
    //연속되는 글자 중 중복된 글자 제거
    delete_char = new Set(delete_char);
    delete_char = [...delete_char];
    //연속되는 글자 제거 (정규식 사용)
    delete_char.map((element) => {
      let reg = element + "{2,}";
      let regexAllCase = new RegExp(reg, "gi");
      cryptogram = cryptogram.replace(regexAllCase, "");
    });
  }
  return cryptogram;
}

function problem2(cryptogram) {
  var answer;
  answer = decryption(cryptogram);
  return answer;
}
module.exports = problem2;
