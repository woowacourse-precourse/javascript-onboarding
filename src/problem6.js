function problem6(forms) {
    const answer = new Set();

    let myMap = new Map();
    forms.forEach((form) => {
        const [_, nickname] = form;
        for (let i = 0; i < nickname.length - 1; i++) {
            // 닉네임을 두글자씩 분리
            const str = nickname.substring(i, i + 2);
            if (myMap.has(str)) myMap.set(str, myMap.get(str) + 1);
            else myMap.set(str, 1);
        }
    });

    forms.forEach((form) => {
        const [email, nickname] = form;
        for (let i = 0; i < nickname.length - 1; i++) {
            const str = nickname.substring(i, i + 2);
            // 겹치면 추가
            // 이때 answer은 set 자료구조(중복 제거)
            if (myMap.get(str) > 1) answer.add(email);
        }
    });
    return [...answer].sort();
}

module.exports = problem6;
