function check_page(pobi, crong)
{
	if (pobi[1] - pobi[0] == 1 && crong[1] - crong[0] == 1)
		return 1;
	else
		return 0;
}

function ex_sum(number)
{
	var sum = 0;
	while(number / 10 || number % 10)
	{
		sum += number % 10;
		number /= 10;
	}
	return sum;
}

function ex_mul(number)
{
	var mul = 1;
	while (number / 10 || number % 10)
	{
		mul *= number % 10;
		number /= 10;
	}
	return mul;
}

function compare_page(str)
{
	var result, sum, mul = 0;
	if (ex_sum(str[0]) > ex_sum(str[1]))
		sum = ex_sum(str[0]);
	else
		sum = ex_sum(str[1]);
	if (ex_mul(str[0]) > ex_mul(str[1]))
		mul = ex_mul(str[0]);
	else
		mul = ex_mul(str[1]);
	if (sum > mul)
		result = sum;
	else
		result = mul;
	return result;
}

function problem1(pobi, crong) {
	var answer, big_pobi, big_crong = 0;
	if (check_page(pobi, crong))
	{
		big_pobi = compare_page(pobi);
		big_crong = compare_page(crong);
		if (big_pobi > big_crong)
			answer = 1;
		else if (big_pobi < big_crong)
			answer = 2;
		else
			answer = 0;
	}
	else
		answer = -1;
	return answer;
}

module.exports = problem1;
