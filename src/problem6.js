function problem6(forms) {
  var answer;
  return answer;
}

/* 크루는 1~10000명 */
/* 이메일 양식 확인 함수 (11~19자) */
/* 닉네임 확인 함수 (한글만 가능, 1~19자) */
/*  닉네임 두글자씩 끊어서
      1. map1에 (key: 자른 닉네임, value: email)로 set
      2. 또 다른 map2에 (key: email, value: 0(count))로 set
    만약 substring이 이미 map1에 존재한다면 해당 substring의 email의 map2 count를 올려줌
      그리고 현재 email은 answer에 포함
    모든 과정이 완료되면 map2를 순회하며 answer에 포함되지 않은 email을 answer에 추가한다.
    중복 삭제 후 종료.
*/

module.exports = problem6;
