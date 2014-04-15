$(document).on('click', '#go-search', function() {
  findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});


/*$(document).on('keydown','input', function(event) {
  if (event.keyCode == 13) {
    console.log('Enter was pressed');
  }
} */

/*$('#search-term').keypress(function(e) {
if (e.which == 13) {
findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
});*/

$(document).ready(function(){
 
  $("#search-term").keydown(function(){

  
 
     findImagesOnGoogle({keywords: $('#search-term').val(), container: '#search-results'})
 
  });
 
});




$(document).on('click', '#search-results img', function() {
  var url = $(this).data('url');
  $("#workspace img").remove();
  var img = $("<img>").attr('src', url);
  $("#workspace").append(img);
});

$(document).on('input', '#text', function() {
  $("#caption").text($(this).val());
});

$(document).on('change', '#left', function() {    
  $("#caption").css("left", $(this).val() + 'px');
});
$(document).on('change', '#top', function() {
  $("#caption").css("top", $(this).val() + 'px');
});

$(document).on('change', '#width', function() {
  $("#caption").css("width", $(this).val() + 'px');
});

$(document).on('change', '#size', function() {
  $("#caption").css("font-size", $(this).val() + 'px');
});

$(document).on('change', '#colour', function() {
  $("#caption").css("color", $(this).val());
});

$(document).on('change', '#align', function() {  
  $("#caption").css("text-align", $(this).val());
});

