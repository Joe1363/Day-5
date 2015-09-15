$(document).ready(function() {
  $("#pic").animate({marginLeft:"400px"}, 500);
  $("#btn").click(function() {
    $("div").effect( "bounce", { times: 3 }, "fast");
    $('#btn').effect('explode');
    // $("#btn").toggle();
    // if($("#btn").css('display') == "none") {
    //   $("#btn").css("display", "initial");
    // };
    $("#pic").animate({marginLeft: "+=1000px"}, 500);
    setTimeout(reapear, 600);
    function reapear() {
        $("#btn").css("display", "initial");
      };
  });
});



// $("#btn").css("display", "initial"):
