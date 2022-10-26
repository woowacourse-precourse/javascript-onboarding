function problem7(user, friends, visitors) {
    let recommend = [];
    for (let i in friends) {
        let a = recommend.findIndex((x) => x[0] === friends[i][0]);
        let b = recommend.findIndex((x) => x[0] === friends[i][1]);
        if (a === -1) {
            recommend.push([friends[i][0], 0]);
            a = recommend.length - 1;
        }
        if (b === -1) {
            recommend.push([friends[i][1], 0]);
            b = recommend.length - 1;
        }
        friends[i][0] = a;
        friends[i][1] = b;
    }
    visitors.sort();
    let last = ["", 0];
    for (let i in visitors) {
        if (last[0] !== visitors[i]) {
            let a = recommend.findIndex((x) => x[0] === visitors[i]);
            if (a === -1) {
                recommend.push([visitors[i], 0]);
                a = recommend.length - 1;
            }
            last = [visitors[i], a];
        }
        recommend[last[1]][1]++;
    }
    let len = recommend.length;
    let orig = recommend.findIndex((x) => x[0] === user);
    let map = [];
    for (let i = 0; i < len; i++) map.push(Array(len).fill(0));
    for (let i of friends) {
        map[i[0]][i[1]] = 1;
        map[i[1]][i[0]] = 1;
    }
    recommend[orig][1] = -Infinity;
    for (let i = 0; i < len; i++) {
        if (map[orig][i] === 1) {
            recommend[i][1] = -Infinity;
            for (let j = 0; j < len; j++)
                if (map[i][j] === 1) recommend[j][1] += 10;
        }
    }
    recommend.sort((a, b) => (b[1] > a[1] ? a[0] - b[0] : b[1] - a[1]));
    return recommend
        .filter((x) => x[1] > 0)
        .map((x) => x[0])
        .slice(0, 5);
}
module.exports = problem7;
