var wordToEmails = new Map();
var check = new Map();
function problem6(forms) {
    var answer = [];
    // email.com 도메인으로 제한한다.
    const validForms = forms.filter(form => form[0].slice(-10) === "@email.com");

    validForms.forEach((form) => {
        check.set(form[0], false);
        for (var i = 0; i < form[1].length - 1; i++) {
            let slice = form[1].slice(i, i + 2);
            if (wordToEmails.get(slice) == null) {
                wordToEmails.set(slice, []);
            }
            wordToEmails.get(slice).push(form[0]);
        }
    });
    wordToEmails.forEach((emails, subName) => {
        if (emails.length <= 1) {
            return;
        }
        emails.forEach((email) => {
            if (check.get(email) == true) {
                return;
            }
            check.set(email, true);
            answer.push(email);
        });
    });
    answer.sort();
    return answer;
}


module.exports = problem6;

