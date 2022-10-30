function problem6(forms) {
    var answer;
    return answer;
}

//이메일과 이름을 따로 저장 (이메일 -> @전까지만 따로 저장) -> 두글자씩 따로 저장 / 저장된 배열들을 각각 비교하여 중복된것이 있는지 체크

function eachStringList(stringList) {
    let eachStringList = [];
    for (let i = 0; i < stringList.length - 1; i++) {
        eachStringList[i] = stringList[i] + stringList[i + 1];
    }
    return eachStringList;
}

function eachArrayChecker() {}
module.exports = problem6;
