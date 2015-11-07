$(document).ready(function() {
    var input_text = $('#input_text').val();   
    var input_date = $('#input_date').val();
    var input_time = $('#input_time').val();
$(function(){
   $('#buttonClicked').click(function(){
      var input_text = $('#input_text').val();
      var input_date = $('#input_date').val();
      var input_time = $('#input_time').val();
      $('#myText').append("<li>"+input_text+" "+input_date+" "+input_time+"</li>");
   });
});


  /*
   $("#buttonClicked").on("click", function(e){
    e.preventDefault(); //this, along with return false, will prevent default behavior from button clicks - probably only useful in web applications, but a good convention to start using
    $('#myText').append("<li>"+input_text+" "+input_date+" "+input_time+"</li>"); // Note that this will continue to append additional li elements with each button click.  If that is not desired, you can call $("#myText").empty(); before adding the li element
    return false;
}); 
*/

/*
    $('#buttonClicked').click(function(){
  	     $('#myText').append("<li>"+input_text+" "+input_date+" "+input_time+"</li>");
 */

  	       	});
    

  	  //$('#myText').append(function(){ $("<li> "+input_text+" "+input_date+" "+input_time+" </li>") 
  	  //	$('myText').html();
