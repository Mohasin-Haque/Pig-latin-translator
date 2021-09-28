var btnTranslate = document.querySelector("#translate-btn");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pig-latin.json";

function getTranslationURL(input) {
  return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("You should try again.")
}

function clickHandler() {
  var inputText = textInput.value;

  //API concepts
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;  
      })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);
