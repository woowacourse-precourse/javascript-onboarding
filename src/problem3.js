function chk_number369(number)
{
	if (number == 3 || number == 6 || number == 9)
		return 1;
	else
		return 0;
}

function cnt_number369(number)
{
	var count, temp, i = 0;
	for (i = 1; i <= number; i++){
		temp = i;
		while (temp / 10 || temp % 10){
			if (chk_number369(temp % 10)){
				count++;
				break;
			}
			temp /= 10;
		}
	}
	return count;
}

function problem3(number) {
	var answer;
	answer = cnt_number369(number);
	return answer;
}

module.exports = problem3;
