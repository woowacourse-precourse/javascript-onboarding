function problem7(user, friends, visitors) {
	const friendLists = new Map()
	const scores = new Map()

	friends.map(([userA, userB]) => {
		if (friendLists.has(userA)) {
			friendLists.get(userA).push(userB)
		} else {
			friendLists.set(userA, [userB])
		}

		if (friendLists.has(userB)) {
			friendLists.get(userB).push(userA)
		} else {
			friendLists.set(userB, [userA])
		}
	})

	const userFriends = friendLists.has(user) ? friendLists.get(user) : []
	const mutualFriendLists = []
	userFriends.forEach(friend => {
		const mutualFriends = friendLists.get(friend).filter(name => name !== user)
		mutualFriendLists.push(...mutualFriends)
	})

	mutualFriendLists.forEach(friend => {
		if (scores.has(friend)) {
			scores.set(friend, scores.get(friend) + 10)
			return
		}
		scores.set(friend, 10)
	})

	visitors.forEach(visitor => {
		if (scores.has(visitor)) {
			scores.set(visitor, scores.get(visitor) + 1)
			return
		}
		scores.set(visitor, 1)
	})

	userFriends.forEach(friend => {
		scores.delete(friend)
	})

	const scoreList = [...scores.entries()]
	scoreList.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0].localeCompare(b[0])
		}
		return b[1] - a[1]
	})
}

module.exports = problem7
