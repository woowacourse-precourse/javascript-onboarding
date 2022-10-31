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
    return answer;
}

module.exports = problem7;
