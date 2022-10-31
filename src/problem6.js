function problem6(forms) {
  let answer;
  return answer;
}

module.exports = problem6;

/**
 * 이메일 제한(forms[0])
 *  1) 이메일 형식에 부합해야 함
 *  2) email.com 도메인
 *      => regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@email.com$/
 *  3) 11 <= 이메일.length < 20
 *      => forms[0].length >= 11 && forms[0].length < 20
 *
 *
 * 닉네임 제한(forms[1])
 *  1) 한글만 허용(영문, 숫자, 특수문자 x)
 *    =>  /^[가-힣]+$/
 *  2) 1 <= 닉네임.length < 20
 *    => forms[1].length >= 1 && forms[1].length < 20
 *  3) 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되면 중복
 *
 * result 제한
 *  1) 이메일만 포함
 *  2) 문자열을 오름차순으로 정렬
 *  3) 중복되는 이메일 제거
 */

/**
 * 전체 크루 중 닉네임의 길이가 1인 경우를 제외
 *
 * abc, bcde
 * ab라는 단어가 없으면 abc라는 단어는 없지만, bc라는 단어가 있을 수 있음
 * 2글자만 중복되어도 result에 추가
 */
