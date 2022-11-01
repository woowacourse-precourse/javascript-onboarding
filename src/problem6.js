function find_overlap_str(str, to_find)
{
	var	i, j;

	if (!to_find)
		return (str);
	i = 0;
	while (str[i]){
		j = 0;
		while (to_find[j]){
			if ((to_find[j] == str[i + j]) && (to_find[j + 1] == str[i + j + 1]))
				return (1);
			j++;
		}
		i++;
	}
	return (0);
}

function problem6(forms) {
	var answer = [];
	var i, j, k = 0;
	while (forms[i]){
		j = i + 1;
		while (forms[j]){
			if (find_overlap_str(forms[i][1], forms[j][1])){
				answer[k] = forms[j][0];
				k++;
			}
			j++;
		}
		i++;
	}
	return answer;
}

module.exports = problem6;
