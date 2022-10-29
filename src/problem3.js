function problem3(number) {
    /** 입력받은 숫자 n의 각 자릿수가 3으로 나누어 떨어질 때마다 count++ */
    const clapCount = (n) => {
        // 3단계) n을 10으로 나눈 몫이 0보다 크다면 1~2단계를 반복
        while (n > 0) {
            // 1단계) 1의 자릿수가 3으로 나누어 떨어질 경우 count +1, 0은 항상 나누어떨어지므로 제외
            if ((n % 10) % 3 === 0 && n % 10 !== 0) {
                count++;
            }
            // 2단계) 이전 자리의 숫자를 확인하기 위해 n을 10으로 나누기
            n = Math.floor(n / 10);
        }
    };
}

module.exports = problem3;
