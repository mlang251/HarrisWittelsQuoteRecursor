const phraseWithBut = "I've said it before, but I'll say it again";
const phraseWithAnd = phraseWithBut.replace(', but', ' and');
const numTimes = process.argv[2];
const goDeeper = (phrase, numTimes) => {
    phrase = phrase.replace(/it/g, () => {
        return numTimes > 1 ? phraseWithBut : phraseWithAnd
    });
    numTimes--;
    return numTimes > 0 ? goDeeper(phrase, numTimes) : phrase;
}

console.log(`${goDeeper(phraseWithBut, numTimes)}.`);