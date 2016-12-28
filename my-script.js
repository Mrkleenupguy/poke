$("#my-button").click(function(){
  var myInput = $("#my-input").val();
  var myUrl = "http://pokeapi.co/api/v2/pokemon/" + myInput + "/";
  $.ajax({
    method: "GET",
    url: myUrl,
    success: function(data){
      console.log(data);
    }
  });
});
