// 햄버거버튼
$(document).ready(function() {
  $(".btn").click(function() {
    $("#menu,.page_cover,html").addClass("open");
    window.location.hash = "#open";
  })
  })

  window.onhashchange = function() {
    if (location.hash != "#open") {
      $("#menu,.page_cover,html").removeClass("open");
    }
  };

  $(document).ready(function(){
  $("#menu ul.sub_mobile").hide();
  $("#menu ul.nav li").click(function(){
  $("ul",this).slideToggle("fast");
  })
})