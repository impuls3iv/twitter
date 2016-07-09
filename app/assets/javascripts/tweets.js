// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  //grab the click event
  $('#tweet_message').on('submit', function(e){
    //var self = $(this)
    e.preventDefault();
  //start ajax function
    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize,
      dataType: 'html'
    }).done(function(responseData){
      var item = ('<li class = "tweet"><p>' + responseData.message + '</p></li>');
      //post tweet to the list
      $('.tweets').append(item);

    });//end of ajax
  });// end of click event
}); //end of on load function
