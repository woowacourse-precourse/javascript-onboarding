function problem3(number) {
    let count = 0;
    const regex365 = /3|6|9/g;

    for (let i = 1; i <= number; i++) {
        for (let x of i.toString()) {
            if (x.match(regex365)) {
                count++;
            }
        }
    }

    return count;
}

module.exports = problem3;
