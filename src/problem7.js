function problem7(user, friends, visitors) {
	function Friend(friendName) {
		this.friendName = friendName;
		this.score = 0;
		this.visitCnt = 0;
		this.knowingCnt = 0;
		this.isFriend = false;
		this.calScore = calScore;
	}
	function calScore() {
		this.score = visitCnt + knowingCnt * 10;
	}
	let answer;
	let FriendList = [];
	addFriends();

	function addFriends() {
		friends.map((ref) => {
			addFriend(ref[0]);
			addFriend(ref[1]);
		});
		visitors.map((ref) => addFriend(ref));
	}

	function addFriend(arr) {
		let count = 0;
		FriendList.forEach((friend) => {
			if (friend.friendName == arr) count++;
		});
		count == 0 ? FriendList.push(new Friend(arr)) : null;
	}
	return answer;
}

module.exports = problem7;
