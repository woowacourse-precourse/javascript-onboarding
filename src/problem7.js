function problem7(user, friends, visitors) {
	let answer;
	let nearFriends = [];
	let suggest = [];

	const myfriends = friends
		.filter((el) => el.includes(user))
		.flat()
		.filter((name) => name !== user);

	myfriends.forEach(
		(friend) =>
			(nearFriends = [
				...nearFriends,
				...friends.filter(
					(entry) => !entry.includes(user) && entry.includes(friend)
				),
			])
	);

	nearFriends.forEach((friend) => {
		let find = suggest.findIndex((ele) => ele.name === friend[1]);
		if (find === -1) suggest.push({ name: friend[1], point: 10 });
	});
	visitors.forEach((friend) => {
		let find = suggest.findIndex((ele) => ele.name === friend);
		if (!myfriends.includes(friend)) {
			if (find === -1) {
				suggest.push({ name: friend, point: 1 });
			} else {
				suggest[find].point += 1;
			}
		}
	});
	answer = suggest
		.sort((a, b) => b.point - a.point)
		.map((friend) => friend.name);

	return answer;
}

module.exports = problem7;
