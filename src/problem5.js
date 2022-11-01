function problem5(money)
{
	var array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	var count = 1;
	while (money / 50000 != 0){
		array[0] = count;
		money -= 50000;
		count++;
	}
	count = 1;
	while (money / 10000 != 0){
		array[1] = count;
		money -= 10000;
		count++;
	}
	count = 1;
	while (money / 5000 != 0){
		array[2] = count;
		money -= 5000;
		count++;
	}
	count = 1;
	while (money / 1000 != 0){
		array[3] = count;
		money -= 1000;
		count++;
	}
	count = 1;
	while (money / 500 != 0){
		array[4] = count;
		money -= 500;
		count++;
	}
	count = 1;
	while (money / 100 != 0){
		array[5] = count;
		money -= 100;
		count++;
	}
	count = 1;
	while (money / 50 != 0){
		array[6] = count;
		money -= 50;
		count++;
	}
	count = 1;
	while (money / 10 != 0){
		array[7] = count;
		money -= 10;
		count++;
	}
	count = 1;
	while (money / 1 != 0){
		array[8] = count;
		money -= 1;
		count++;
	}
	return array;
}

module.exports = problem5;
