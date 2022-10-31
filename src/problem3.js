function problem3(number) {
    let count = 0;

    for (let i = 1; i <= number; i++) {
        let arr = i + "";
        for (let j = 0; j < arr.length; j++) {
            if ((arr[j] == "3") || (arr[j] == "6") || (arr[j] == "9")) count++;
        }
    }

    return count;
}

module.exports = problem3;
