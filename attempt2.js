
$(document).ready(function() {
   /*==========================================
                      variabes
    ===========================================*/
  var task 
  var datetimepicker = $('.datetimepicker').val();
  
  var set1_menu 
  var set1_index  

  var set2_menu 
  var set2_index
  var set2_button
 

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

      set2_menu = '<select class="set2_menu"> <option value="set2_table0">set2table0</option> <option value="set2_table1">set2table1</option> <option value="set2_table2">set2table2</option> <option value="set2_table3">set2table3</option> </select>';
      set2_button = '<input type="button" class="set2_button" data-from="'+set1_index+'" value="set2_button" />'
  	  
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
  $(document).on("click", "[class=set2_button]", function()   {  
  /*$("div.set1.row").on("click", "input.set2_button", function(){*/ 
      /*==========================================
                        variabes
      ===========================================*/
      
/* Naming the variable twice before, still havent tested the 'this statements' */
     /* var set2_yo =    $("li set2_menu option:selected" );
      set2_index = set2_yo.index()
     */   
          
      var set2_index = $(this).closest('li').find('select.set2_menu option:selected').index();
          



      
      /*=========================================
                        POST
      =========================================*/

      /*=========================================
                        TEST
      =========================================*/
      console.log( "IT WORKS" + " " + set2_index );
      alert(set2_index);

  //  });

  });

});


