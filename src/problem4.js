function frog_dct_upper(chr)
{
	var i, result = 0;
	var Z = 'Z';
	var frog_dct = [];
	while (Z >= 'A'){
		frog_dct[i] = Z;
		Z--;
		i++;
	}
	result = frog_dct[(Number(chr - 65))];
	return result;
}

function frog_dct_lower(chr)
{
	var i, result = 0;
	var z = 'z';
	var frog_dct = [];
	while (z >= 'a'){
		frog_dct[i] = z;
		z--;
		i++;
	}
	result = frog_dct[(Number(chr - 97))];
	return result;
}

function chg_alpha(chr)
{
	var result;
	if (chr >= 'a' && chr <= 'z')
		result = frog_dct_lower(chr);
	else if (chr >= 'A' && chr <= 'Z')
		result = frog_dct_upper(chr);
	else
		return result;
}

function problem4(word) 
{
	var i = 0;
	var answer = [];
	while (i < word.length){
		answer[i] = chg_alpha(word);	
		i++;
	}
	return answer;
}

module.exports = problem4;
