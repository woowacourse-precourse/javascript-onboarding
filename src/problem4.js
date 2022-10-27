function problem4(word) {
  var answer;
  return answer;
}

module.exports = problem4;

/**
 * CharCodeAt() 사용
 *
 *  1) word를 순회하며 알파벳 문자인지 확인 (num = 65~90 || 97~122)
 *  2) 알파벳인 경우 변환
 *  2-1) 대문자인 경우(65~90)
 *          num = 64 + 27 - num
 *  2-2) 소문자인 경우(97~122)
 *          num = 96 + 27 - num
 *  4)변환 결과를 answer에 추가하여 리턴
 */
