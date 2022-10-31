function problem6(forms) {

    let answer = [];
    let dic = {};
    let check;

    for (crew of forms) {
        for (i=0; i<crew[1].length-1; i++) {
            check = crew[1].substring(i, i+2);
            if (check in dic) {
                dic[check] += 1;
            }
            else {
                dic[check] = 1;
            }
        }
    }

    for (crew of forms) {
        for (j=0; j<crew[1].length-1; j++) {
            check = crew[1].substring(j, j+2);
            if (dic[check] > 1) {
                answer.push(crew[0]);
            }
        }
    }

    return [...new Set(answer)].sort();
}

module.exports = problem6;
