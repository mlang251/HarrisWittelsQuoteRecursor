const outerPhrase = "I've said it before, but I'll say it again";
const nestedPhrase = outerPhrase.replace(', but', ' and');
const numTimes = process.argv[2];

const goDeeper = (phrase, numTimes) => {
    phrase = phrase.replace(/it/g, nestedPhrase);
    numTimes--;
    return numTimes > 0 ? goDeeper(phrase, numTimes) : phrase;
}

console.log(`${goDeeper(outerPhrase, numTimes)}.`);