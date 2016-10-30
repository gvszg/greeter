$('#login').on('click', function() {

  var john = G$("John", "Doe");

  $('#logindiv').hide();

  john.setLang($('#lang').val()).HTMLGreeting($('#greeting'), true).log();

});