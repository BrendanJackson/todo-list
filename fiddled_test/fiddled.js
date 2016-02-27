var itm=0, input_text;
$(document).ready(function() {
	$('body').css({'background':'wheat'});
  var options_menu;
  var get;
  var selectedIndex;

  $('#submit_button').click(function() {
  	itm++;
    input_text = $("#input_text").val();

		send_to = $("#send_to option:selected");
    var send_index = send_to.index()

    options_menu = '<select id="options_menu-'+itm+'"> <option value="set2table1">set2table1</option> <option value="set2table2">set2table2</option> <option value="set2table3">set2table3</option> <option value="set2table4">set2table4</option> </select>';
    index_item = '<input type="button" id="get-'+itm+'" data-from="'+send_index+'" value="Get selected index" />'
		send_index++;
    $('#set1_text'+send_index).append("<ul>" + "<li>" + input_text + " " + options_menu + "" + index_item + "</li>" + "</ul>");
    
  });

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
