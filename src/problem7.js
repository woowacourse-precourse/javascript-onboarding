function problem7(user, friends, visitors) {
    let userFriends = [];
    let recommendFriends = [];
    let answer = [];

    let friendsObj = setList(friends, visitors);

    friends.forEach(v=> {
        const [A, B] = v;
        if(A==user) userFriends.push(B);
        if(B==user) userFriends.push(A);
    });

    friendsObj = setScore(user, friends, visitors, userFriends, friendsObj);

    recommendFriends = sortObj(user, userFriends, friendsObj);
    recommendFriends.forEach(v=> answer.push(v.name));
    if(recommendFriends.length > 5) return answer.slice(0,5);
    return answer
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

function sortObj(user, userFriends, friendsObj) {
    let recommendFriends = [];
    for(let friend in friendsObj) {
        if(friendsObj[friend] != 0 && friend != user && userFriends.indexOf(friend) == -1) {
            recommendFriends.push({name: friend, num: friendsObj[friend]});
        }
    }
    recommendFriends = recommendFriends.sort((a,b)=>{
        if(a.name < b.name) return -1;
        if(b.name < a.name) return 1;
        return 0;
    })
    recommendFriends = recommendFriends.sort((a,b)=> b.num-a.num);
    return recommendFriends;
}

module.exports = problem7;
