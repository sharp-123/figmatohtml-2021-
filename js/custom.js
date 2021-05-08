
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

	$(".view-single-invoice-card").click(function(){
		$(".invoice-card").toggleClass("close");
		$(".single-invoice-card").toggleClass("open");
	});
	///////////////////////////


(function () {
  var tagList = ['John Stones', 'John Stones'];

  var $tagList = $("#tagList");
  var $newTag = $("#newTag");

  tagList_render();
  
  function tagList_render () {
    $tagList.empty();
    tagList.map (function (_tag) {
      var temp = '<li>'+ _tag +'<span class="rmTag">&times;</span></li>';
      $tagList.append(temp);
    });
  };
  
  $newTag.on('keyup', function (e) {
    // enter keycode 13
    if (e.keyCode == 13) {
      var newTag = $("#newTag").val();
      if( newTag.replace(/\s/g, '') !== '' ){
        tagList.push(newTag);
        $newTag.val('');
        tagList_render();
      }
    }
  });
  
  $tagList.on("click", "li>span.rmTag", function(){
    var index = $(this).parent().index();
    tagList.splice(index, 1);
    tagList_render();
  });
})();

//////////////////////

(function () {
  var tagList2 = ['John Stones', 'John Stones'];

  var $tagList2 = $("#tagList2");
  var $newTag2 = $("#newTag2");

  tagList2_render();
  
  function tagList2_render () {
    $tagList2.empty();
    tagList2.map (function (_tag) {
      var temp = '<li>'+ _tag +'<span class="rmTag">&times;</span></li>';
      $tagList2.append(temp);
    });
  };
  
  $newTag2.on('keyup', function (e) {
    // enter keycode 13
    if (e.keyCode == 13) {
      var newTag2 = $("#newTag2").val();
      if( newTag2.replace(/\s/g, '') !== '' ){
        tagList2.push(newTag2);
        $newTag2.val('');
        tagList2_render();
      }
    }
  });
  
  $tagList2.on("click", "li>span.rmTag", function(){
    var index = $(this).parent().index();
    tagList2.splice(index, 1);
    tagList2_render();
  });
})();

});



