function problem2(cryptogram) {
	function del(str) {
		for (let i = 0; i < str.length; i++) {
			str = str.replace(str[i] + str[i], "");
		}
		return str;
	}

	while (true) {
		let data = del(cryptogram);
		if (data === cryptogram || cryptogram === "") break;
		else cryptogram = data;
	}
	return cryptogram;
}

module.exports = problem2;
