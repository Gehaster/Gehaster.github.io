let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let randomGermanWord = "";


function addVocabulary(){
    dictionary[germanText.value] = englischText.value;

    germanText.value = '';
    englischText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render(){
    vocabularyList.innerHTML = '';
    for(let key in dictionary) {
        vocabularyList.innerHTML +=  `<li>${key} - ${dictionary[key]}</li> `;
    }
}

function nextVocabulary(){
    let obj_keys = Object.keys(dictionary);
    randomGermanWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.textContent = dictionary[randomGermanWord];
    
    if (randomGermanWord == null) {
        word.textContent = "Bitte Füge deien Vocabeln in die Liste zu!";
    }
}

function compare(){
   if (germanText.value == randomGermanWord) {
    //Richtig !!
    text_comp.textContent = 'Richtig';
   }else {
    //Falsch!!
    text_comp.textContent = 'Falsch';
   }
   germanText.value = '';
   nextVocabulary();
}