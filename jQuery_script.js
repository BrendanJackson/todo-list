$(document).ready(function() {
    var input_text = $('#input_text').val();   
    var input_date = $('#input_date').val();
    var input_time = $('#input_time').val();
    var options_menu ;
    var get;
   $('#buttonClicked').click(function(){
       input_text = $('#input_text').val();
       input_date = $('#input_date').val();
       input_time = $('#input_time').val();
       options_menu = '<select id="select"> <option value="critical">Critical</option> <option value="important">Important</option> <option value="future_importance">Future Importance</option> </select> ';
       
      //http://stackoverflow.com/questions/1221957/jquery-to-retrieve-and-set-selected-option-value-of-html-select-element

      $('#myText').append("<li>"+input_text+" "+input_date+" "+input_time+ options_menu+ "</li>");
  
});


  /* try this instead
   $("#buttonClicked").on("click", function(e){
    e.preventDefault(); //this, along with return false, will prevent default behavior from button clicks - probably only useful in web applications, but a good convention to start using
    $('#myText').append("<li>"+input_text+" "+input_date+" "+input_time+"</li>"); // Note that this will continue to append additional li elements with each button click.  If that is not desired, you can call $("#myText").empty(); before adding the li element
    return false;
}); 
*/

      //different style list bullets can identify where its from potentially?

   
  
/*
 function() {
    var x = $("select").selectedIndex;
    var y = $("select").options;
    alert("Index: " + y[x].index + " is " + y[x].text);
}
*/


$('#get').click(function() {
 get = '<input type="submit" name="get" id="get" value="Get selected index" />'
 
  //how do I make this send to another list on submit? replace alert.
  //http://www.theextremewebdesigns.com/blog/jquery-get-selected-index-jquery-get-selected-option-index-2-ways/
  alert( $("#select option:selected").index() );
 
  
});
 


});

/*
  1)I want to turn input_text/date/time into a single object
    *kind of like (input_text + input_date + input_time) = wellness_object# see .extend, not extend
  2)I want to make that object clickable
  3)I want to make that click open a menu with the abillty to send that object to tables critical, important, or future importance 
*/
   	
    
