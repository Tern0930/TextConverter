const ButUpperCase = document.getElementById("upper-case");
const ButLowerCase = document.getElementById("lower-case");
const ButProperCase = document.getElementById("proper-case");
const ButSentenceCase = document.getElementById("sentence-case");

let text = document.querySelector("textarea");

ButUpperCase.addEventListener("click", () => {
    text.value = text.value.toUpperCase();
});

ButLowerCase.addEventListener("click", () => {
    text.value = text.value.toLowerCase();
});

ButProperCase.addEventListener("click", () => {
    let textChanged = text.value.split(/\s+/);
    if (!textChanged[textChanged.length - 1])
        textChanged.pop();
    for (let it in textChanged) {
        let word = textChanged[it];
        word = word.toLowerCase();
        word = word[0].toUpperCase() + word.slice(1);
        textChanged[it] = word;
    }
    text.value = textChanged.join(' ');
});

ButSentenceCase.addEventListener("click", () => {
    const re = /\s*([.!?]+)\s*/;
    let textChanged = text.value.split(re);
    if (!textChanged[textChanged.length - 1])
        textChanged.pop();
    for (let it in textChanged) {
        let sentence = textChanged[it];
        sentence = sentence.toLowerCase();
        if (!/[.!?]+/.test(sentence))
            sentence = sentence[0].toUpperCase() + sentence.slice(1);
        else
            sentence = `${sentence} `;
        textChanged[it] = sentence;
    }
    text.value = textChanged.join('');
});

// ButSentenceCase.addEventListener("click", () => {
//     let textChanged = text.value.split(". ");
//     if (!textChanged[textChanged.length - 1])
//         textChanged.pop();
//     for (let it in textChanged) {
//         let sentence = textChanged[it];
//         sentence = sentence.toLowerCase();
//         sentence.split(" ")
//         sentence = sentence[0].toUpperCase() + sentence.slice(1);
//         textChanged[it] = sentence;
//     }
//     text.value = textChanged.join(". ");
// });

const ButDownload = document.getElementById("save-text-file");
ButDownload.addEventListener("click", () => {
    download("text.txt", text.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
