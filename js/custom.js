
$(document).ready(function() {

	///////////////////////
	$('.tab-content1').hide();
	$('#tab-1').show();

	$('#select-box').change(function () {
	   dropdown = $('#select-box').val();
	  $('.tab-content1').hide();
	  $('#' + "tab-" + dropdown).show();                                    
	});
    

    ////////////////////////

	$(".close-sidebar").click(function(){
	  $("#sidebarMenu").removeClass("show");
	});

	/////////////////////////////

});



