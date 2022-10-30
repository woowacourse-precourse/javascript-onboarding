function problem5(money) {
    // 1단계) 0~8까지의 인덱스별로 화폐의 단위를 각각 저장한 객체 생성
    const values = {
        0: 50000,
        1: 10000,
        2: 5000,
        3: 1000,
        4: 500,
        5: 100,
        6: 50,
        7: 10,
        8: 1,
    };

    // 1단계) 요소를 0으로 채운 길이가 9인 배열 생성
    const arr = Array.from({ length: 9 }, (el) => 0);
}

module.exports = problem5;
