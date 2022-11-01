function problem3(number) {
  // 369 박수의 횟수 구하기
  const getClapCount = (number) => {
    let clap_count = 0;
    // 369 정규표현식
    const regex = /[369]/g;

    // 369가 있으면 배열로 반환되고 길이를 더해줌
    for (let i = 1; i <= number; i++) {
      const clap = String(i).match(regex);
      if (clap) clap_count += clap.length;
    }

    return clap_count;
  };

  // 코드 작성
  return getClapCount(number);
}

module.exports = problem3;
