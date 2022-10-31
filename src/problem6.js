function isValidEmail(email) {
  const validEmailRegex = /.+@email\.com$/;
  return validEmailRegex.test(email);
}

function problem6(forms) {
  const validForms = forms.filter(([email, _name]) => isValidEmail(email));

  function twoLetterChunksOfName(name) {
    const chunks = [];
    for (let i = 0; i <= name.length - 2; i++) {
      const chunk = name.slice(i, i + 2);
      chunks.push(chunk);
    }
    return chunks;
  }

  /** @type {Map<string, string[]>} */
  const emailsByChunk = new Map();
  for (const form of validForms) {
    const [email, name] = form;
    const chunks = twoLetterChunksOfName(name);
    for (const chunk of chunks) {
      const emailsOfThisChunk = /** @type {string[]} */ (
        emailsByChunk.get(chunk) ?? []
      );
      emailsOfThisChunk.push(email);
      emailsByChunk.set(chunk, emailsOfThisChunk);
    }
  }

  const problematicEmails = /** @type {Set<string>} */ (new Set());
  [...emailsByChunk.entries()]
    .filter(([_chunk, emails]) => emails.length > 1)
    .forEach(([_chunk, emails]) => {
      emails.forEach((email) => problematicEmails.add(email));
    });

  return [...problematicEmails.values()].sort();
}

module.exports = problem6;
