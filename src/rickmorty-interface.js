import $ from 'jquery';

$(document).ready(function() {
  $('#character').click(function() {
    let name = $('#name').val();
    console.log(name);
    $('#name').val("");
    $.ajax({
      url: `https://rickandmortyapi.com/api/character/?name=${name}`,
      // url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=API-KEY-GOES-HERE`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        $('.showCharacter').append(`This is the character ${name} is ${response.results}%`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});
