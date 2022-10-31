const makeFriendsList = (friends) => {
    let obj = {};

    for (let [x, y] of friends) {
        if (!(x in obj)) {
            obj[x] = [];
        }
        if (!(y in obj)) {
            obj[y] = [];
        }
        obj[x].push(y);
        obj[y].push(x);
    }

    return obj;
};

function problem7(user, friends, visitors) {
    let friendsList = makeFriendsList(friends);
    const answer = [];

    const compare = friendsList[user]; // user와 친구 사이
    const queue = [];
    const myMap = new Map();

    //bfs, 함께 아는 친구 처리
    for (let key of Object.keys(friendsList)) {
        if (key === user) continue;
        if (!myMap.has(key)) myMap.set(key, 0);
        queue.push(key);
        while (queue.length) {
            let current = queue.shift();
            for (let x of friendsList[current]) {
                if (compare?.includes(x)) {
                    myMap.set(key, myMap.get(key) + 10);
                }
            }
        }
    }

    // visitor 처리
    for (let x of visitors) {
        if (!myMap.has(x)) {
            myMap.set(x, 1);
        } else {
            myMap.set(x, myMap.get(x) + 1);
        }
    }

    for (let [key, value] of myMap.entries()) {
        if (compare?.includes(key)) continue;
        answer.push([key, value]);
    }

    // 배열 정렬
    answer.sort((a, b) => {
        if (a[1] === b[1]) {
            if (a < b) {
                return -1;
            } else {
                return 1;
            }
        } else {
            return b[1] - a[1];
        }
    });

    console.log(answer);

    return answer
        .filter((e) => e[1] !== 0)
        .map((e) => e[0])
        .splice(0, 5);
}

console.log(
    problem7(
        'mrko',
        [
            ['mrko', 'jun'],
            ['bedi', 'jun'],
            ['bedi', 'donut'],
            ['donut', 'jun'],
            ['donut', 'mrko'],
            ['shakevan', 'andole'],
            ['jun', 'andole'],
            ['shakevan', 'jun'],
            ['shakevan', 'mrko'],
        ],
        ['donut', 'shakevan']
    )
);
module.exports = problem7;
