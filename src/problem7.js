function problem7(user, friends, visitors) {
    let userFriends = [];
    let answer = [];
    let friendsObj = setList(friends, visitors);
}

function setList(friends, visitors) {
    let friendsObj = {};
    friends.forEach(v=> {
        const [A, B] = v;
        if(!friendsObj[A]) friendsObj[A] = 0;
        if(!friendsObj[B]) friendsObj[B] = 0;
    });
    visitors.forEach(v=> {
        if(!friendsObj[v]) friendsObj[v] = 0;
    });
    return friendsObj;
}

module.exports = problem7;
