$(document).ready(function(){

  var GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby6Oe0b53XJ69MrF764w1HfX5jRf8G8DbgCuJh8bLtq1CCkMrb2/exec';

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  console.log(today)
  $('.tooltipped').tooltip();
	$("select").formSelect();

  var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
          sURLVariables = sPageURL.split('&'),
          sParameterName,
          i;

      for (i = 0; i < sURLVariables.length; i++) {
          sParameterName = sURLVariables[i].split('=');

          if (sParameterName[0] === sParam) {
              return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
          }
      }
  };

  var product = getUrlParameter('product');
  var $form = $("#orderForm");

  $("form").on("submit", function(){
  	event.preventDefault();

    var stuff = $form.serializeObject();
    stuff.date = today;
    stuff.product = product;

    console.log("let's post to sheets")
    var jqxhr = $.ajax({
      url: GOOGLE_SCRIPT_URL,
      method: "GET",
      dataType: "json",
      data: stuff,
      success: function() {
          console.log('form submit success')
          M.toast({html: 'We will get back to you shortly.'})
          $("#submitButton").removeClass("pink");
          $("#submitButton").removeClass("lighten-3");
          $("#submitButton").text("Response Sent");
          $("#submitButton").addClass("disabled");
      }
    })
  })
});
