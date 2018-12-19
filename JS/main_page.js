let N_Menu_link_BG_a = document.getElementById("sidebar").querySelectorAll(".link");
let BG_pic_div = document.getElementById("background_pic");
let Pre_button_div = document.getElementById("previous_button");
let Next_button_div = document.getElementById("next_button");
let Content_div = document.getElementById("Content_section");
let Title_for_content_h1 = document.getElementById("Title_here");
let Intro_p = document.getElementById("content_intro");
let Edit_date_div = document.getElementById("Edit_date_text");
let Full_screen_mode_text_h4 = document.getElementById("Full_screen_mode_text");

//For the enter button
let Enter_button_div = document.getElementById("Enter_button");
let Enter_button_link_a = document.getElementById("Enter_button_link");
let Enter_button_text_h4 = document.getElementById("Enter_button_text");



let Click = 0;
let Slide_NUM = 0;
var mymenu = SlideDATA();
let counter = 0;
let counter2 = 0;

/*var Y = 0 ;
var destination = 0;
var speed = 2;
var scroller = null;
var elementID = " ";

function initialize_Scroll_auto_slow(){
  Y = 0;
  speed = 2;
}
function Scroll_auto_slow(elementID){
  destination = document.getElementById(elementID).offsetTop;
  scroller = setTimeout(function(){Scroll_auto_slow(elementID)}, 0.1);

  Y = Y + speed;
  if(Y >= destination){
    clearTimeout(scroller);
    initialize_Scroll_auto_slow();
    return;
  }
  window.scroll(0, Y+2);
} */

function Default_link(){
  Enter_button_link_a.href = mymenu[0].link;
}




function remove(){
  Intro_p.classList.remove('animate_text_in_short_intro');
}

function Slide_show(Slide_NUM){
  let Slide_NUM_max = mymenu.length;
  let ImagefileAddress = mymenu[Slide_NUM].imagefile;
  let BGcolorCode = mymenu[Slide_NUM].background;
  BG_pic_div.style.transition = "1s";
  BG_pic_div.style.backgroundImage = "url("+ImagefileAddress+")";
  Content_div.style.transition = "1s";
  Content_div.style.background = ""+BGcolorCode+"";
  Title_for_content_h1.innerHTML = mymenu[Slide_NUM].Title;
  Intro_p.classList.add('animate_text_in_short_intro');
  setTimeout(remove, 1000);
  Intro_p.innerHTML = mymenu[Slide_NUM].introductory_text;
    let Know_able = "May";
        Know_able = mymenu[Slide_NUM].able;
    switch(Know_able){
      case "No":
      Enter_button_div.style.backgroundColor = "red";
      Enter_button_text_h4.innerHTML = "Access denied";
      Enter_button_link_a.href = "#";
      break;
      case "May":
      Enter_button_div.style.backgroundColor = "#5C1605";
      Enter_button_text_h4.innerHTML = "Constructing...";
      Enter_button_link_a.href = "#";
      break;
      case "Yes":
      Enter_button_div.style.backgroundColor = " #0BA900";
      Enter_button_text_h4.innerHTML = "Take a look?";
      Enter_button_link_a.href = mymenu[Slide_NUM].link;
      break;
    }
  Edit_date_div.innerHTML = mymenu[Slide_NUM].Update_date;
}
function Slide_show_moveback(){
  Click--;
  if(Click != mymenu.length){
    Next_button_div.style.right = "5%";
  }
  if(Click == 0){
    Pre_button_div.style.left = "-30%";
  }
  Slide_show(Click);
}

function Slide_show_moveon(){
  Click++;
  if(Click == mymenu.length - 1){
    Next_button_div.style.right = "-30%";
  }
  if(Click != 0){
    Pre_button_div.style.left = "5%";
  }
  Slide_show(Click);
}

/*For the menu*/
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
  Edit_date_div.innerHTML = mymenu[0].Update_date;
}

function Blur_background(){
  BG_pic_div.style.filter = "blur(8px)";
}
function Clear_background(){
  BG_pic_div.style.filter = "blur(0px)";
}
function Allow_fullscreen(){
  counter2++;
  switch(counter2){
    case(1):
          if (
          document.fullscreenEnabled || /* Standard syntax */
          document.webkitFullscreenEnabled || /* Chrome, Safari & Opera */
          document.mozFullScreenEnabled || /* Firefox */
          document.msFullscreenEnabled /* IE/Edge */
          ) {
            /* Show the element in fullscreen */
                document.body.webkitRequestFullscreen();
                if (document.body.requestFullscreen) {
                  document.body.requestFullscreen(); /* Standard syntax */
                } else if (document.body.mozRequestFullScreen) { /* Firefox */
                  document.body.mozRequestFullScreen();
                } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                  document.body.webkitRequestFullscreen();
                } else if (document.body.msRequestFullscreen) { /* IE/Edge */
                  document.body.msRequestFullscreen();
                }
           }
           Full_screen_mode_text_h4.innerHTML = "Disable full screen";
  break;
  case(2):
        if (document.exitFullscreen) {
      document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
      }
      Full_screen_mode_text_h4.innerHTML = "Enable full screen";
      counter2 = 0;
  break;
 }
}
