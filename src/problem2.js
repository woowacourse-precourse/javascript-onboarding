function problem2(cryptogram) {
  let answer;

  const overlapCheck = (arr) => {
    let new_cryptogram = "";
    let before_char = "";
    let should_delete = false;
    let overlap = false;

    // 연속하는 문자 제거하는 기능
    cryptogram_arr.forEach((char) => {
      // 전 문자와 다르면 추가한다. (추후에 중복 발생 시 마지막 문자 하나 제거해야 됨.)
      if (char !== before_char) {
        // 중복 체크 끝낸 뒤 남은 한 문자 제거
        if (should_delete) {
          new_cryptogram = new_cryptogram.slice(0, -1);
          should_delete = false;
        }
        new_cryptogram += char;
        before_char = char;
      }
      // 전 문자와 같다면 추가하지 않는다.
      else {
        // 전 문자와 같으면서 길이가 2이면 중복 제거후 빈 문자열만 남는다.
        if (cryptogram_arr.length === 2) new_cryptogram = "";
        should_delete = true;
        before_char = char;
        overlap = true;
      }
    });
    return { new_cryptogram, overlap };
  };

  return answer;
}

module.exports = problem2;
