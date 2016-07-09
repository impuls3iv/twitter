// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  //grab the click event
  $('#tweet-message').on('click', function(e){
    e.preventDefault();
  //start ajax function
    $.ajax({
      url: $(this).attr('action'),
      method: "POST"
      data: $(this).serialize
      dataType: "POST"
    }).done(function(responseData){
      
    }.always{

    }.fail{

    });//end of ajax
  });// end of click event
}); //end of on load function
