$(function(){

  $("#change-color").on("click",()=>{

    $("#target").css("color","green");
    $("#target").css("background-color","pink");
    $("#target").css("font-weight","bold");

  });

  $("#change-text").on("click",()=>{
    $("#target").text("今日も頑張ったね。");
  });

  $("#fade-out").on("click",()=>{
    $("#target").fadeOut();
  });

  $("#fade-in").on("click",()=>{
    $("#target").fadeIn();
  });

});