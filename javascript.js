function buttonClicked() {
    var myText = document.getElementById('myText');
    var inputtext = document.getElementById('inputtext').value  ;
        myText.innerHTML += "<li>"+inputtext+"</li>";
    
}

