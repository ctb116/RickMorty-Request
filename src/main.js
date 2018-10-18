import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {

  $.ajax({
    url: `https://rickandmortyapi.com/api/episode`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {

      for(let i=0; i < (response.results).length; i++) {
        let episodeId = response.results[i].id;
        let episodeName = response.results[i].name;
      $('#episodeList').append(`<option value="${episodeId}">${episodeName}</option>`);
      }
    },
    error: function() {
      $('#errors').text("There was an error processing your request. Please try again.");
    }
  });

  $('#character').click(function() {
    let episodeSelect = $("#episodeList").val();
    console.log(episodeSelect);

    $.ajax({
      url: `https://rickandmortyapi.com/api/episode/${episodeSelect}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        for(let i=0; i < (response.characters).length; i++) {
          let characterList = response.characters[i];

          $.ajax({
            url: characterList,
            type: 'GET',
            data: {
              format: 'json'
            },

            success: function(responseTwo) {
             let characterNames = responseTwo.name;
             let characterImage = responseTwo.image;
             // let characterStatus = responseTwo.status;
            $('.showCharacter').append(`<ul>${characterNames}</ul>`)
            $('.charImg').append(`<img src="${characterImage}"></img>`)
            },

          });
        }
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });

  // $.ajax({
  //   url: `https://rickandmortyapi.com/api/episode?page=2`,
  //   type: 'GET',
  //   data: {
  //     format: 'json'
  //   },
  //   success: function(response) {
  //     console.log(response);
  //     for(let i=0; i < (response.results).length; i++) {
  //       let episodeId = response.results[i].id;
  //       let episodeName = response.results[i].name;
  //     $('#episodeList').append(`<option value="${episodeId}">${episodeName}</option>`);
  //     console.log(response.results[i]);
  //     }
  //   },
  //   error: function() {
  //     $('#errors').text("There was an error processing your request. Please try again.");
  //   }
  // });
});
