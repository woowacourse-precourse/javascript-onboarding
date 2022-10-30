function problem7(user, friends, visitors) {
    let userFriends = [];
    let answer = [];
    let friendsObj = setList(friends, visitors);

    friends.forEach(v=> {
        const [A, B] = v;
        if(A==user) userFriends.push(B);
        if(B==user) userFriends.push(A);
    });

    friendsObj = setScore(user, friends, visitors, userFriends, friendsObj);
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

function setScore(user, friends, visitors, userFriends, friendsObj) {
    friends.forEach(v=> {
        const [A, B] = v;
        userFriends.forEach(d=> {
            if(A==d && B!=user) friendsObj[B] +=10;
            if(B==d && A!=user) friendsObj[A] +=10;
        });
    })
    visitors.forEach(v=> {
        friendsObj[v] +=1;
    });
    return friendsObj;
}

module.exports = problem7;
