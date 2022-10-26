function problem7(user, friends, visitors) {
    let recommend = [];
    for (let i in friends) {
        if (recommend.findIndex((x) => x[0] === friends[i][0]) === -1)
            recommend.push([friends[i][0], 0]);
        if (recommend.findIndex((x) => x[0] === friends[i][1]) === -1)
            recommend.push([friends[i][1], 0]);
    }
    for (let i in visitors)
        if (recommend.findIndex((x) => x[0] === visitors[i]) === -1)
            recommend.push([visitors[i], 1]);
        else recommend[recommend.findIndex((x) => x[0] === visitors[i])][1]++;
    let len = recommend.length;
    let orig = recommend.findIndex((x) => x[0] === user);
    let map = [];
    for (let i = 0; i < len; i++) map.push(Array(len).fill(0));
    for (let i in friends) {
        let a = recommend.findIndex((x) => x[0] === friends[i][0]);
        let b = recommend.findIndex((x) => x[0] === friends[i][1]);
        map[a][b] = 1;
        map[b][a] = 1;
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
    return recommend.filter((x) => x[1] > 0).map((x) => x[0]);
}
module.exports = problem7;
