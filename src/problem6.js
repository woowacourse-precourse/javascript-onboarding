function problem6(forms) {
    const answerList = [];
    const compareStrings = [];
    const duplicateNameList = [];
    
    function findDuplicates(arr) {
        const filtered = arr.filter((item, index) => arr.indexOf(item) !== index);
        return [...new Set(filtered)];
    }
    //중복 비교 글자들을 구한다
    forms.forEach(form => {
        const nameArr = [...form[1]];
        nameArr.forEach((string, index) => {
            if (nameArr[index + 1] === undefined) {
                return;
            }
            compareStrings.push([string, nameArr[index + 1]].join(""))
        });
    });
    
    const duplicateList = findDuplicates(compareStrings);
    
    // 중복 비교 글자들과 중복되는 것이 있는지 확인한다
    forms.forEach(form => {
        const nameArray = [...form[1]];
        nameArray.forEach((string, index2) => {
            if (duplicateList.includes([string, nameArray[index2 + 1]].join(""))) {
                duplicateNameList.push(form[1])
            }
        });
    });
    
    //중복되는 닉네임의 이메일을 확인하여 정답리스트에 추가한다
    duplicateNameList.forEach(name => {
        answerList.push(forms.find(form => form[1] === name)[0]);
    })
    answerList.sort();
    return answerList;
}

module.exports = problem6;
