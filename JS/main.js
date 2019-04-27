function hide_menu(){
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

var Upper_menu_ul = document.getElementById("upper_menu_bar");
var Toggle_div = document.getElementById("toggle_menu");

var Item_a = Upper_menu_ul.getElementsByTagName("a");
var Stroke_div = Toggle_div.getElementsByTagName("div");

let len = Item_a.length;
let len_stk = Stroke_div.length;
i=0;
j=0;

  if (prevScrollpos > currentScrollPos) {
    Toggle_div.style.top = "5px" ;
    Upper_menu_ul.style.top = "0px";
  } else {
    Toggle_div.style.top = "-100px";
    Upper_menu_ul.style.top = "-100px";
  }

  if (currentScrollPos > 700){
    for (i; i < len; i++) {
       Item_a[i].style.color = "black";
    }
    for (j; j < len_stk; j++){
      Stroke_div[j].style.backgroundColor = "black";
    }
    Stroke_div[1].style.backgroundColor = "grey";
  }
  else{
    for (i; i < len; i++) {
       Item_a[i].style.color = "white";
    }
    for (j; j < len_stk;j++){
      Stroke_div[j].style.backgroundColor = "white";
    }
    Stroke_div[1].style.backgroundColor = "grey";
  }

  prevScrollpos = currentScrollPos;
}

}
function toggle_menu(){
  document.getElementById("menu_content").classList.toggle('change_menu');
}

function animated_menu(){
  document.getElementById("SK1").classList.toggle('change_1');
  document.getElementById("SK2").classList.toggle('change_2');
  document.getElementById("SK3").classList.toggle('change_3');
  document.getElementById("toggle_menu").classList.toggle('change_toggle');
}
function START(){
  var Preloader_div = document.getElementById("preloader");
  var Intro_div = document.getElementById("intro_pic");
  Preloader_div.style.left = "-100%";
  Preloader_div.style.top = "-100%";
  document.body.style.overflow = "auto";
}
