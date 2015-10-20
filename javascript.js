function buttonClicked() {
    var myText = document.getElementById('myText');
    var inputtext = document.getElementById('inputtext').value  ;
    var inputdate = document.getElementById('inputdate').value  ;
        myText.innerHTML += "<li>"+inputtext+" "+inputdate+"</li>";

    
}

/*
how do I make this recorded text turn into its own object
*/
function task(text, date, time)

/*
input text is goes 
var task = new task(text, date, time)

*/
