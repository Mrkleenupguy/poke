$("#my-button").click(function(){
  var myInput = $("#my-input").val();
  var myUrl = "https://pokeapi.co/api/v2/pokemon/" + myInput + "/";
  $.ajax({
    method: "GET",
    url: myUrl,
    success: function(data){
      $("#poke-name").html(data.name);
      $("#poke-image").src = data.sprites.front_default;
    }
  });
});
