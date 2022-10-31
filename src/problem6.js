/*
  ### 기능 목록

  1. 정상적인 이메일인지 확인하기
  2. 정상적인 닉네임인지 확인하기
  3. 단어 자르기
  4. 닉네임에 접근하여 두자리씩 비교해, 중복되는 사람을 이메일 보낼 배열에 넣는다.
  4-1. 이때 이미 배열 넣은 사람은 제외하고 비교한다.
  5. 중복되는 닉네임을 가진 이메일을 배열에 추가하기
  6. 배열에서 중복되는 요소 제거하기

  */

function problem6(forms) {
  var answer = "";
  const email_regex = new RegExp(/^(\w{2,10})(@email\.com)$/);
  const ninkname_regex = new RegExp(/^([ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,19})$/);

  const vaild_Array = forms.filter((element) => {
    return email_regex.test(element[0]) && ninkname_regex.test(element[1]);
  });

  const SlicingWord = (fullname) => {
    let words_Array = [];
    for (let i = 0; i < fullname.length - 1; i++) {
      words_Array.push(fullname.slice(i, i + 2));
    }
    return words_Array;
  };

  const FindWords = (array, words) => {
    return array.reduce((c, e) => {
      for (let w of words) {
        if (e[1].indexOf(w) != -1) {
          c.push(e[0]);
        } else {
          false;
        }
      }
      return c;
    }, []);
  };

  let send_email = [];

  vaild_Array.forEach((element, index) => {
    let words = SlicingWord(element[1]);
    let add_elements = FindWords(vaild_Array.slice(index + 1), words);
    if (add_elements.length != 0) {
      send_email.push(element[0]);
      send_email = send_email.concat(add_elements);
    }
  });
}

module.exports = problem6;
