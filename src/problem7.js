function problem7(user, friends, visitors) {
    let networks = {};

    friends.forEach(([f1, f2]) => {
        if (f1 in networks) {
            networks[f1].push(f2);
        } else {
            networks[f1] = [f2];
        }

        if (f2 in networks) {
            networks[f2].push(f1);
        } else {
            networks[f2] = [f1];
        }
    });

    let userFriends = networks[user];
    let scores = [];

    function checkCommonFriends(targetName) {
        let score = 0;
        userFriends.forEach((ele) => {
            if (networks[targetName].indexOf(ele) !== -1) score += 10;
        });
        return score;
    }

    for (let person in networks) {
        if (userFriends.indexOf(person) > -1) continue;
        if (person === user) continue;
        scores[person] = checkCommonFriends(person);
    }

    for (let visitor of visitors) {
        if (userFriends.indexOf(visitor) > -1) continue;
        if (visitor === user) continue;
        if (scores[visitor]) {
            scores[visitor] += 1;
        } else {
            scores[visitor] = 1;
        }
    }

    let answer = Object.keys(
        scores.sort((a, b) => {
            if (a[1] > b[1]) return 1;
            if (a[1] < b[1]) return -1;
            return a[0].localeCompare(b[0]);
        })
    );

    return answer.slice(0, 5);
}

module.exports = problem7;
