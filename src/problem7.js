function problem7(user, friends, visitors) {
    var answer = [];
    let count = 0;
    let countArr = [];
    let newFriendsDic = [];
    let frnArr = [];
    let i = 0;

    let userFriends = [];
    for(let friend of friends) {
        if(friend.indexOf(user) !== -1) {
            if (friend.indexOf(user) === 0) {
                userFriends.push(friend[1])
            } else {
                userFriends.push(friend[0])
            }
            countArr.push(count);
        }
        count = count + 1;
    }


    friends.splice(countArr[0], 1);
    friends.splice(countArr[1] - 1, 1);

    for(let friend of userFriends) {
        i = 0;
        for(let visitor of visitors) {
            if(visitor === friend){
                frnArr.push(i);
            }
            i = i + 1;
        }
    }

    visitors.splice(frnArr[0], 1);
    visitors.splice(frnArr[1] - 1, 1);

    console.log(frnArr)

    for(let newFriend of friends) {
        for(let friend of userFriends) {
            if(newFriend.indexOf(friend) !== -1) {
                if(friend.indexOf(friend) === 0) {
                    if(newFriendsDic.find(e => e.key === newFriend[1])){
                        let obj = newFriendsDic.find(e => e.value === newFriend[1]);
                    }else {
                        newFriendsDic.push({key : newFriend[1], value : 10})
                    }
                } else {
                    if(newFriendsDic.find(e => e.key === newFriend[0])){
                        let obj = newFriendsDic.find(e => e.value === newFriend[0]);
                    }else {
                        newFriendsDic.push({key : newFriend[0], value : 10})
                    }
                }
            }
        }
    }


    for(let visitor of visitors) {
        if(newFriendsDic.find(e => e.key === visitor)){
            let obj = newFriendsDic.find(e => e.value === visitor);
        }else {
            newFriendsDic.push({key : visitor, value : 1})
        }
    }

    for (let newF of newFriendsDic) {
        answer.push(newF.key);
        if(answer.length >= 5) break;
    }

    return answer;
}

module.exports = problem7;
