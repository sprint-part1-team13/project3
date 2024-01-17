// 체크박스 상태 변화 감지
document.getElementById("check_box").addEventListener("change", function() {
  // 체크박스가 체크되었는지 확인
  var isChecked = this.checked;

  // side menu 요소 선택
  var sideMenu = document.getElementById("side_menu");

  var overlay = document.querySelector(".overlay");

  // 체크박스 상태에 따라 display 속성 변경
  if (isChecked) {
    side_menu.style.display = "block";
    overlay.style.display = "block";
  } else {
    side_menu.style.display = "none";
    overlay.style.display = "none";
  }
});
