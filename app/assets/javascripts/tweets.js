// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  //grab the click event
  $('#new_tweet').on('submit', function(e){
    console.log('point one')
    //var self = $(this)
    e.preventDefault();

    //start ajax function
    $.ajax({
      url:$(this).attr('action'),
      method: 'POST',
      data: $(this).serialize,
      dataType: 'html'
     }).done(function(responseData){
      //var item = ('<li class = "tweet"><p></p></li>');
      //post tweet to the list

      $('.tweet').html("");
      $('<li>' + responseData + '</li>').appendTo('.tweet');

    });//end of ajax
  });// end of click event
}); //end of on load function
