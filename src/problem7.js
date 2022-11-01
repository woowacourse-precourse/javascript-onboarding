// 친구 리스트를 작성하는 함수
// 모든 유저의 친구 리스트를 만들기 위해
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

    const compare = friendsList[user]; // 입력받은 user의 친구만 뽑아둔다. 나중에 비교하기 위해
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
                // 입력받은 user를 제외한 누군가의 친구리스트에 속하는 친구가
                // 입력받은 user의 친구에 포함된다면? 함께 아는 친구임으로 + 10점
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
        // 친구 추천 알고리즘이기 때문에 이미 친구인 인원은 건너 띄어준다.
        if (compare?.includes(key)) continue;
        answer.push([key, value]);
    }

    // 배열 정렬
    // sort의 원리인데, -1이면 순서가 바뀌고, 1이면 유지가 된다.
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

    // 마지막으로 점수가 0점인 인원은 제외해주고, 최대 5명까지만 뽑아준다.
    return answer
        .filter((e) => e[1] !== 0)
        .map((e) => e[0])
        .splice(0, 5);
}

module.exports = problem7;
