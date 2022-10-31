//@ts-check
const User = require("./User");

class UserRelation {
	constructor () {
		this._usersRelations = new Map();
	}
	_getRelations(user) {
		return this._usersRelations.get(user) || [];
	}
	_addRelation(source, target) {
		const relation = this._getRelations(source);
		relation.length ? relation.push(target) : this._usersRelations.set(source, [target]);
	}
	/**
	 * @abstract
	 * @param {User} user1
	 * @param {User} user2
	 */
	setRelation(user1, user2) {}
}

class FriendUserRelation extends UserRelation{
	constructor () {
		super();
	}
	setRelation(user1, user2) {
		this._addRelation(user1, user2);
		this._addRelation(user2, user1);
	}
	calculateScore(user) {
		const result = new Map();
		const relUsers = [user, ...this._getRelations(user)];
		for (const relUser of relUsers) {
			const notRelUsers = this._getRelations(relUser).filter((notRelUser) => !relUsers.includes(notRelUser));
			for (const notRelUser of notRelUsers) {
				result.set(notRelUser, result.get(notRelUser) + 10 || 10);
			}
		}
		return result;
	}
}

class VisitorUserRelation extends UserRelation{
	setRelation(user1, user2) {
		this._addRelation(user2, user1);
	}
	calculateScore(user) {
		const result = new Map();
		for (const relUser of this._getRelations(user)) {
			result.set(relUser, result.get(relUser) + 1 || 1);
		}
		return result;
	}
}


module.exports = {FriendUserRelation, VisitorUserRelation};