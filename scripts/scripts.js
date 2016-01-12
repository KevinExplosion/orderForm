$(document).ready(function() {
  $("form#order").submit(function(event) {
    var nameInput = $("input#name").val();
    var streetInput = $("input#street").val();
    var street2Input = $("input#street2").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".name").text(nameInput);
    $(".street").text(streetInput);
    $(".street2").text(street2Input);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#confirmation").show();

    event.preventDefault();
  });
});
