function problem6(forms) {
    const answer = [];

    let myMap = new Map();
    forms.forEach((form) => {
        const [email, nickname] = form;
        for (let i = 0; i < nickname.length - 1; i++) {
            const str = nickname.substring(i, i + 2);
            if (myMap.has(str)) myMap.set(str, myMap.get(str) + 1);
            else myMap.set(str, 1);
        }
    });

    forms.forEach((form) => {
        const [email, nickname] = form;
        for (let i = 0; i < nickname.length - 1; i++) {
            const str = nickname.substring(i, i + 2);
            if (myMap.get(str) > 1) answer.push(email);
        }
    });
    return answer.sort();
}

module.exports = problem6;
