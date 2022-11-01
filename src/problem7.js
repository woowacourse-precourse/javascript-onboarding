/* 
  기능 목록
  - 사용자별 친구 리스트를 객체로 초기화
  - 친구의 친구 배열 구하기
  - 모르는 사람 배열 구하기
*/

function 쌍_배열_객체로_변환(쌍_배열) {
  return 쌍_배열.reduce((객체, [사용자_1, 사용자_2]) => {
    객체[사용자_1] = 객체[사용자_1] || [];
    객체[사용자_1].push(사용자_2);

    객체[사용자_2] = 객체[사용자_2] || [];
    객체[사용자_2].push(사용자_1);

    return 객체;
  }, {});
}

function 문자열_순서_비교하기(문자열_1, 문자열_2) {
  if (문자열_1 > 문자열_2) return 1;

  if (문자열_1 < 문자열_2) return -1;

  return 0;
}

function problem7(사용자, 친구_쌍_배열, 방문객_배열) {
  const 친구_명단 = 쌍_배열_객체로_변환(친구_쌍_배열);
  const 사용자의_친구_배열 = 친구_명단[사용자];
  const 사용자의_친구의_친구_점수 = 사용자의_친구_배열
    .reduce((배열, 사용자의_친구) => {
      배열 = [...배열, ...친구_명단[사용자의_친구]];

      return 배열;
    }, [])
    .filter((이름, 인덱스, 배열) => 이름 !== 사용자)
    .filter((이름, 인덱스, 배열) => !친구_명단[사용자].includes(이름))
    .reduce((객체, 사용자의_친구의_친구) => {
      객체[사용자의_친구의_친구] = 객체[사용자의_친구의_친구] || 0;
      객체[사용자의_친구의_친구] += 10;

      return 객체;
    }, {});

  const 추천_친구_점수 = 방문객_배열
    .filter((방문객) => !사용자의_친구_배열.includes(방문객))
    .reduce((객체, 방문객) => {
      객체[방문객] = 객체[방문객] || 0;
      객체[방문객] += 1;

      return 객체;
    }, 사용자의_친구의_친구_점수);

  const 추천_이름 = Object.entries(추천_친구_점수)
    .filter(([이름, 점수]) => 점수 > 0)
    .sort(
      ([이름_1, 점수_1], [이름_2, 점수_2]) =>
        점수_2 - 점수_1 || 문자열_순서_비교하기(이름_1, 이름_2)
    )
    .slice(0, 5)
    .map(([이름]) => 이름);

  return 추천_이름;
}

module.exports = problem7;
