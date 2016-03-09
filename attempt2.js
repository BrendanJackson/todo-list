
$(document).ready(function() {
   /*==========================================
                      variabes
    ===========================================*/
  var task 
  var datetimepicker 
  
  var set1_menu 
  var set1_index  

  var set2_menu 
  var set2_index
  var set2_button
 
/*jQuery('#datetimepicker').datetimepicker();*/


/*==================================================================================================================
==================================================================================================================*/
/*SUBMIT BUTTON*/
/*==================================================================================================================
==================================================================================================================*/


  $('#submit_button').on("click",function() {
  	    
    
    /*==========================================
                      variabes
    ===========================================*/
      task = $("#input_text").val();
     	set1_menu = $(".set1_menu option:selected");
      set1_index = set1_menu.index() //switch arg
      datetimepicker = $('#datetimepicker').datetimepicker();
      set2_menu = '<select class="set2_menu"> <option value="set2_table0">set2table0</option> <option value="set2_table1">set2table1</option> <option value="set2_table2">set2table2</option> <option value="set2_table3">set2table3</option> </select>';
      set2_button = '<input type="button" class="set2_button" data-set1_data="'+set1_index+'" value="set2_button" />'
  	  
      switch(set1_index){
        /*===================  append <li> with no style type  ========================*/
        case 0:
        $('.set1_table0').append("<li>" + task + " " /*+ datetimepicker + " "*/ + set2_menu + " " + set2_button + "</li>" );
        break;

         case 1:
        $('.set1_table1').append("<li>" + task + " " /*+ datetimepicker + " "*/ + set2_menu + " " + set2_button + "</li>" );
        break;

         case 2:
        $('.set1_table2').append( "<li>" + task + " "/* + datetimepicker + " "*/ + set2_menu + " " + set2_button + "</li>" );
        break;

         case 3:
        $('.set1_table3').append( "<li>" + task + " "/* + datetimepicker + " "*/ + set2_menu + " " + set2_button + "</li>" );
        break;
    }
    
  })

/*==================================================================================================================
==================================================================================================================*/
/*SET2_BUTTON*/
/*==================================================================================================================
==================================================================================================================*/
/*http://stackoverflow.com/questions/12065329/jquery-adding-event-listeners-to-dynamically-added-elements*/
 /*check gibberish's answer*/
  /*$(document).on("click", "[class=set2_button]", function()   {*/  
  $("div.set1.row").on("click", "input.set2_button", function(){ 
      /*==========================================
                        variabes
      ===========================================*/
          
      var set2_index = $(this).closest('li').find('select.set2_menu option:selected').index();
      var set1_data = $(this).data('set1_data');
      
      /*=========================================
                        POST
      =========================================*/

      /*=========================================
                        TEST
      =========================================*/
      console.log( "IT WORKS" + " " + set2_index );

   switch(set2_index){
        /*===================  append <li> with no style type, consider consolidating append info into a variable  ========================*/
        case 0:
        $('.set2_table0').append("<li>" + task + " (from Table " +set1_data+ ")" + /*and from set2*/" " /*+ datetimepicker + " "*/  + "</li>" );
        $('.master').append( "<li>" + task + " (from Table " +set1_data+ ")" /*and from set2*/+ " "/* + datetimepicker + " "*/ + "</li>" );
        break;

         case 1:
        $('.set2_table1').append("<li>" + task + " (from Table " +set1_data+ ")" + /*and from set2*/" " /*+ datetimepicker + " "*/  + "</li>" );
        $('.master').append( "<li>" + task + " (from Table " +set1_data+ ")" /*and from set2*/+ " "/* + datetimepicker + " "*/ + "</li>" );
        break;

         case 2:
        $('.set2_table2').append( "<li>" + task + " (from Table " +set1_data+ ")" + /*and from set2*/" "/* + datetimepicker + " "*/ + "</li>" );
        $('.master').append( "<li>" + task + " (from Table " +set1_data+ ")" /*and from set2*/+ " "/* + datetimepicker + " "*/ + "</li>" );
        break;

         case 3:
        $('.set2_table3').append( "<li>" + task + " (from Table " +set1_data+ ")" /*and from set2*/ + " "/* + datetimepicker + " "*/ + "</li>" );
        $('.master').append( "<li>" + task + " (from Table " +set1_data+ ")" /*and from set2*/+ " "/* + datetimepicker + " "*/ + "</li>" );
        break;
    }
   
  });

/*=====================================================================================================
{MASTER
====Append vs appendTo=======https://www.codecademy.com/forum_questions/50031633dd2be800020302b5
}
======================================================================================================*/



});


/*

* datepicker with notes
>> master list
  -master list chronological order dependent on datepicker

* this is from "x" list
  - <li> styles


1)which will have the biggest impact? datepicker

*/