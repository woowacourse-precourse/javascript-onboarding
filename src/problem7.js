function problem7(user, friends, visitors) {
    const stack = [];
    const answer_list = {};

    // user의 친구
    for (let i of friends) {
        for (let j of i) {
            // 사용자 객체 만들기
            if (!Object.keys(answer_list).includes(j) && j != user) {
                answer_list[j] = 0;
            }
        }
        // 친구정보 stack에 저장
        if (i.includes(user)) {
            stack.push(i[0]);
        }
    }

    // user의 친구의 친구
    for (let m of friends) {
        for (let n of stack) {
            // 유저와는 친구가 아니고 유저의 친구와 친구인 사람이면 10점 추가
            if (m.includes(n) && m[1] != user) {
                let a = m.filter((e) => {
                    return e !== n;
                });
                answer_list[a[0]] += 10;
            }
        }
    }

    // 방문자수
    for (let k of visitors) {
        if (!Object.keys(answer_list).includes(k)) {
            answer_list[k] = 1;
        } else {
            // 이미 친구인 사람은 방문자수 세기 제외
            if (!stack.includes(k)) {
                answer_list[k] += 1;
            }
        }
    }

    // 0점 거르기
    const answer_check = [];
    for (const [key, value] of Object.entries(answer_list)) {
        if (!stack.includes(key)) {
            answer_check.push([key, value]);
        }
    }

    // 정렬
    answer_check.sort((a, b) => {
        if (a[1] == b[1]) {
            return a[0] - b[0]; // 이름순
        } else {
            return b[1] - a[1]; // 추첨 점수순
        }
    });

    // 배열 정리
    const answer = [];
    for (p of answer_check) {
        answer.push(p[0]);
    }

    // 최대 5명까지만 출력
    if (answer.length >= 5) {
        answer.slice(0, 5);
        return answer;
    } else {
        return answer;
    }
}

module.exports = problem7;
