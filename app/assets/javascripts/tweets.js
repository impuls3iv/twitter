// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function(){

  //grab the click event
  $('.new_tweet').on('submit', function(e){

    console.log('point one')
    //var self = $(this)
    e.preventDefault();


    //start ajax function
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(responseData){
      var source = $('#tweet-template').html();
      var template = Handlebars.compile(source);
      var output = template(responseData);
      $('.tweets').prepend(output);
    });
    //  }).done(function(responseData){
    //   //var item = ('<li class = "tweet"><p></p></li>');
    //   //post tweet to the list
    //   $('<li>' + responseData + '</li>').appendTo('.tweets');
    //
    // });//end of ajax
  });// end of click event
}); //end of on load function
