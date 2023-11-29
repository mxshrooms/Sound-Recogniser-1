function start() {
    navigator.mediaDevices.getUserMedia({audio:true});
    storeml5 = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3a3fLF9fI/model.json', modelReady);
}
function modelReady() {
    storeml5.classify(gotResults);
}
