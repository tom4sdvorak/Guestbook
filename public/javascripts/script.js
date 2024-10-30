$(document).ready(function() {
    $('#ajaxForm').on('submit', function(event) {
      event.preventDefault();
      let formInput = {
        username: $('#username').val(),
        country: $('#country').val(),
        date: new Date(),
        message: $('#message').val(),
      };
      
      $.ajax({
        type: 'POST',
        url: '/add',
        data: JSON.stringify(formInput),
        contentType: 'application/json',
        success: function(response) {
          console.log(response);
          $('#returnedMessages').removeClass("hidden");
          $.each(response, function(index, entry){
            $('#messageList').append(`<tr><td>${entry.id}</td><td>${entry.username}</td><td>${entry.country}</td><td>${entry.message}</td></tr>`);
          });
        },
        error: function(xhr, status, error) {
          console.error(error);
        }
      });
    });
  });