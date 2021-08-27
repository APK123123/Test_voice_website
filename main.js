var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();



function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    
}

recognition.onresult = function     run (event) {

    console.log(event);

    var Content = event.results[0] [0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerText = Content;

if( Content == "Hi."){

    window.alert("Hello!");

}

if( Content == "Close."){

   close();

}
if( Content == "Open."){

    open("https://code.whitehatjr.com/s/dashboard");
 
 }
}

