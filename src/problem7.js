function problem7(user, friends, visitors) {
    const people = {};
    const userFriends = [];
    const answer = [];

    friends.forEach((arr) => {
        if (!people.hasOwnProperty(arr[0])) people[arr[0]] = 0;
        if (!people.hasOwnProperty(arr[1])) people[arr[1]] = 0;

        if (arr.includes(user)) {
            if (arr[0] === user) {
                userFriends.push(arr[1]);
            } else {
                userFriends.push(arr[0]);
            }
        }
    });

    friends.forEach((arr) => {
        if (userFriends.includes(arr[0]) && arr[1] !== user) {
            people[arr[1]] += 10;
        }
        if (userFriends.includes(arr[1]) && arr[0] !== user) {
            people[arr[0]] += 10;
        }
    });

    visitors.forEach((element) => {
        if (!people.hasOwnProperty(element)) people[element] = 0;
        if (!userFriends.includes(element)) people[element] += 1;
    });

    const sortedArr = Object.entries(people);
    sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });

    sortedArr.forEach((arr) => {
        if (arr[1] > 0 && answer.length < 5) answer.push(arr[0]);
    });

    return answer;
}

module.exports = problem7;
