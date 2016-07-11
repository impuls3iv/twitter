// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  //grab the click event
  $('#new_tweet').on('submit', function(e){
    var valuesToSubmit = $(this).serialize;
    console.log('point one')
    //var self = $(this)
    e.preventDefault();
    $('.tweets').html('');

    //start ajax function
    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: valuesToSubmit,
      dataType: 'html'
    });
    //  }).done(function(responseData){
    //   //var item = ('<li class = "tweet"><p></p></li>');
    //   //post tweet to the list
    //   $('<li>' + responseData + '</li>').appendTo('.tweets');
    //
    // });//end of ajax
  });// end of click event
}); //end of on load function
