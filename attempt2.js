
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
 // var get;
 // var selectedIndex;


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
  $("div.set1.row").on("click", "input.set2_button", function(){
      /*==========================================
                        variabes
      ===========================================*/
      

      set2_menu = $("select.set2_menu")
     /* var to_set2_index = $(this).closest('li').find('select.to_set2 option:selected').index;
          to_set2 = $()
      */
      /*=========================================
                        POST
      =========================================*/

      /*=========================================
                        TEST
      =========================================*/
      console.log( "IT FUCKING WORKS" + " " + set2_menu.index );
      

  //  });

  });

});


/*
  $(document).on("click", '[id^=get-]', function() {
      var si = $('#options_menu-'+itm+' option:selected');
  alert('bob');
      var get_index = si.index();
      var from_index = $(this).data('from');
      from_index++; //from_index is zero-based, but Tables are not

      itm++;
      get = '<input type="submit"  name="get" id="get'+itm+'" value="Get selected index" />';
      itm--;
      var final = "<ul>" + "<li>" + input_text + " (from Table " +from_index+ ")" + "</li>" + "</ul>";
    get_index++;
    $("#set2_text"+get_index).append(final);
  
  }); //END document.on


}); //END document.ready
*/