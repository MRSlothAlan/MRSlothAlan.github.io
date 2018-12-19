let N_Menu_link_BG_a = document.getElementById("sidebar").querySelectorAll(".link");
let Content_div = document.getElementById("About_content");
let counter = 0;
var mymenu = SlideDATA();


function toggle_div(){
  var element = document.getElementById('sidebar');
  element.classList.toggle('active');
}
function Animate_menu(){
 document.getElementById('stroke_1').classList.toggle('change_1');
 document.getElementById('middle').classList.toggle('change_2');
 document.getElementById('stroke_2').classList.toggle('change_3');
}
function Change_position_Content(){
  counter++;
  if(counter == 1){
    Content_div.style.left = "35%";
  }
  if(counter > 1){
    Content_div.style.left = "10%";
    counter = 0;
  }
}
function Determine_link_background(){
  for(let i=0; i<mymenu.length; i++){
    let Know_able = mymenu[i].able;
    switch(Know_able){
      case"No":
      N_Menu_link_BG_a[i+1].classList.add("link_not_allow");
      break;
      case"Yes":
      N_Menu_link_BG_a[i+1].classList.add("link_allow");
      break;
      case"May":
      N_Menu_link_BG_a[i+1].classList.add("link_NOPE");
      break;
    }
  }
}
