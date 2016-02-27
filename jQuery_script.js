var itm=0, input_text;
$(document).ready(function() {
   
/*1st use at submit button*/
    var input_text = $('#input_text').val();   
    var datetimepicker1 = $('#datetimepicker1').val();
    var selectedIndex; 
    var get;
    var options_menu;


/*
    var daily = 0;
    var critical = 1;
    var important = 2;
    var future_importance = 3;
  */  


/*when I hit the submit button this happens...*/
   $('#submit_button').click(function(){
      itm++;
      input_text = $('#input_text').val();
      datetimepicker1 = $('#datetimepicker1').val() 
      send_to = $("#send_to option:selected");
      var send_index = send_to.index()
       console.log("index: " + send_to.index() );
     // $('#myText').append("<ul>" + "<li>" +input_text+ " " +datetimepicker1+ " " +options_menu+ "" +index_item+ "</li>" + "</ul>");
                      
      options_menu = '<select id="options_menu-'+itm+'" class="form-control options_menu"> <option value="set2_table1"> Daily </option> <option value="set2_table2"> Critical </option> <option value="set2_table3"> Important </option> <option value="set2_table4"> Future Importance </option> </select>';
      index_item = '<input type="submit" name="get" class="btn btn-warning get" id="get-'+itm+'" data-from="'+send_index+'" value="Get selected index" />'
      send_index++;
      //http://stackoverflow.com/questions/1221957/jquery-to-retrieve-and-set-selected-option-value-of-html-select-element

$('#set1_text'+send_index).append("<ul>" + "<li>" + input_text + " " +datetimepicker1+ " " + options_menu + "" + index_item + "</li>" + "</ul>");
    
  });
/*  
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
*/

/*
$('#get').click(function() {
 get = '<input type="submit" class="btn btn-warning" name="get" id="get" value="Get selected index" />';
  selectedIndex = $("#get option:selected");
  selectedIndex = $(this).siblings("select").index();
*/



  $(document).on("click", '[id^=get-]', function() {
      var si = $('#options_menu-'+itm+' option:selected');
  
      var get_index = si.index();
      var from_index = $(this).data('from');
      from_index++; //from_index is zero-based, but Tables are not

      itm++;
      get = '<input type="submit"  name="get" id="get'+itm+'" value="Get selected index" />';
      itm--;
      var final = "<ul>" + "<li>" + input_text + +datetimepicker1+" (from Table " +from_index+ ")" + "</li>" + "</ul>";
    get_index++;
    $("#set2_text"+get_index).append(final);
    $("master_0"+get_index).append(final);
  }); //END document.on


}); //END document.ready



/*
$('.get').on("click", function() {
get = '<input type="submit"  name="get" class="get" value="Get selected index" />';

selectedIndex = $(this).closest('li').find('select.options_menu option:selected');

console.log("index: " + selectedIndex.index() );

var get_index = $(this).closest('li').find('select.options_menu option:selected').index();



//switch statement demo
switch(get_index) {
//the append allows a new <p> to join with color class, this is a lot mor desirable for the master list, lets you know where data has come from.
  case 0:
  $( "#priority_0" ).append("<ul>" + "<li>" +input_text +" "+datetimepicker1+ "</li>" + "</ul>");//.text(input_text +" "+ input_date +" "+ input_time)
  //$( "#master_0" ).append("<ul>" + "<li>" +input_text +" "+ datetimepicker1+ "</li>" + "</ul>"); 
  break;

  case 1:
  $( "#priority_1" ).append("<ul>" + "<li>"  +input_text +" "+datetimepicker1+ "</li>" + "</ul>");//.text(input_text +" "+ input_date +" "+ input_time)
  //$( "#master_0" ).append("<ul>" + "<li>"  +input_text +" "+ datetimepicker1+ "</li>" + "</ul>");
  break;

  case 2:
  $( "#priority_2" ).append("<ul>" + "<li>" +input_text +" "+datetimepicker1+ "</li>" + "</ul>");//.text(input_text +" "+ input_date +" "+ input_time)
  //$( "#master_0" ).append("<ul>" + "<li>" +input_text +" "+datetimepicker1+ "</li>" + "</ul>");
  break;

  case 3:
  $( "#priority_3" ).append("<ul>" + "<li>"  +input_text +" "+ datetimepicker1+ "</li>" + "</ul>");//.text(input_text +" "+ input_date +" "+ input_time)
  //$( "#master_0" ).append("<ul>" + "<li>"  +input_text +" "+ datetimepicker1+ "</li>" + "</ul>");
  break;

  default:
  alert("Error");


}
});
});
*/
//"index_item" turns into "get" whats up with that?? 
