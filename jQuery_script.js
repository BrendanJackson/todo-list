$(document).ready(function() {
   
/*1st use at submit button*/
    var input_text = $('#input_text').val();   
    var input_date = $('#input_date').val();
    var input_time = $('#input_time').val();
    var datetimepicker1 = $('#datetimepicker1').val();

    var options_menu ;
    var get;
    var selectedIndex 
    var daily = 0;
    var critical = 1;
    var important = 2;
    var future_importance = 3;
    


/*when I hit the submit button this happens...*/
   $('#submit_button').click(function(){
       input_text = $('#input_text').val();
       datetimepicker1 = $('#datetimepicker1').val() 
       options_menu = '<select class="form-control" id="options_menu"> <option value="daily">Daily</option> <option value="critical">Critical</option> <option value="important">Important</option> <option value="future_importance">Future Importance</option> </select>';
       index_item = '<input type="submit" class="btn btn-warning" name="get" id="get" value="Get selected index" />'
     
      
       send_to = $("#send_to option:selected");
       console.log("index: " + send_to.index() );
     // $('#myText').append("<ul>" + "<li>" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>" + "</ul>");
          
      //http://stackoverflow.com/questions/1221957/jquery-to-retrieve-and-set-selected-option-value-of-html-select-element

var send_index = send_to.index()
  
switch(send_index){

  case 0:
  //$("div#wellness ul").append("<li class=lead" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>");
  $('#my_text0').append("<ul>" + "<li>" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>" + "</ul>");
  break;
  
  case 1:
  $('#my_text1').append("<ul>" + "<li>" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>" + "</ul>");
  break;
  
  case 2:
  $('#my_text2').append("<ul>" + "<li>" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>" + "</ul>");
  break;
  
  case 3:
  $('#my_text3').append("<ul>" + "<li>" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>" + "</ul>");
  break;

}

});

$('#get').click(function() {
 get = '<input type="submit" class="btn btn-warning" name="get" id="get" value="Get selected index" />';
 selectedIndex = $("#get option:selected");

  //how do I make this send to another list on submit? replace alert.
  //http://www.theextremewebdesigns.com/blog/jquery-get-selected-index-jquery-get-selected-option-index-2-ways/
  //$('#options_menu').val()
  console.log("index: " + selectedIndex.index() );
 
 var get_index = selectedIndex.index()



//switch statement demo
switch(get_index) {
//the append allows a new <p> to join with color class, this is a lot mor desirable for the master list, lets you know where data has come from.
  case 0:
  $( "div#daily ul" ).append("<p class='lead'>" +input_text +" "+datetimepicker1+ "</p>");//.text(input_text +" "+ input_date +" "+ input_time)
  $( "div#master_list ul" ).append("<p class='bg-primary'>" +input_text +" "+ datetimepicker1+ "</p>"); 
  break;

  case 1:
  $( "div#critical ul" ).append("<p class='lead'>"  +input_text +" "+datetimepicker1+ "</p>");//.text(input_text +" "+ input_date +" "+ input_time)
  $( "div#master_list ul" ).append("<p class='bg-danger'>"  +input_text +" "+ datetimepicker1+ "</p>");
  break;

  case 2:
  $( "div#important ul" ).append("<p class='lead'>" +input_text +" "+datetimepicker1+ "</p>");//.text(input_text +" "+ input_date +" "+ input_time)
  $( "div#master_list ul" ).append("<p class='bg-warning'>" +input_text +" "+datetimepicker1+ "</p>");
  break;

  case 3:
  $( "div#future_importance ul" ).append("<p class='lead'>"  +input_text +" "+ datetimepicker1+ "</p>");//.text(input_text +" "+ input_date +" "+ input_time)
  $( "div#master_list ul" ).append("<p class='bg-info'>"  +input_text +" "+ datetimepicker1+ "</p>");
  break;

  default:
  alert("Error");


}

  });
    

});


/* 
//how do I make this send to another list on submit? replace alert.
  //http://www.theextremewebdesigns.com/blog/jquery-get-selected-index-jquery-get-selected-option-index-2-ways/
  //similar possibly better http://jsfiddle.net/Nj85e/
  $('#get').click(function() {
 get = '<input type="submit" name="get" id="get" value="Get selected index" />'
  
     $('.daily').text("index#" +  );
  
  alert( $("#select option:selected").index() );
 
    });
*/






/*
  1)I want to turn input_text/date/time into a single object
    *kind of like (input_text + input_date + input_time) = wellness_object# see .extend, not extend
  2)I want to make that object clickable
  3)I want to make that click open a menu with the abillty to send that object to tables critical, important, or future importance 
*/
   	
    
  /* try this instead
   $("#submit_button").on("click", function(e){
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

