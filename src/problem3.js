//예외사항
function exception(number) {
  if (number < 1 || number > 10000) return true;
  return false;
}

/**
 * 숫자를 글자로 바꾼 후 3,6,9 가 있을시 crap으로 바꿔준 후
 * crap을 찾은만큼 배열로 반환
 * crap의 값이 나오기 전엔 null이기 때문에 if(crap != null)을 넣어줌
 * @param {*} number 
 * @returns 
 */
function game_369(number) {
  let crap_count = 0;
  for (let i = 1; i <= number; i++) {
    let change_crap = String(i).replace(/[3,6,9]/g, "crap");
    let crap = change_crap.match(/crap/g);
    if (crap != null) crap_count = crap.length + crap_count;
  }
  return crap_count;
}

function problem3(number) {
  if (exception(number)) return "제한사항을 지켜주세요.";
  return game_369(number);
}

module.exports = problem3;
