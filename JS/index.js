var container_div = document.getElementById('intro');
var inner_div = document.getElementById('inner');
var mask1 = document.getElementById("mask1");
var mask2 = document.getElementById("mask2");

//setting mouse object
var mouse = {
  //properties
  _x: 0, _y: 0,
  x: 0, y: 0,
  //methods
  updatePosition: function(event){
    var e = event || window.event; //receive event
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y)*-1;
    //this.y need to be reversed since upper part of the y-axis is
    //positive but after upper minus center it becomes negative
  },
  setOrigin: function(e){//finding the origin/center of the element
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() {return '(' + this.x + ',' + this.y + ')';}
}
//---------------------------------------------------------------------------------


mouse.setOrigin(container_div);

var counter = 0;
var updateRate = 10;
//return a boolean about whether it is time to update. set the rate of update
var isTimeToUpdate = function(){
  return (counter++ % updateRate === 0);
}
//update the rotation of the inner div element
var updateTransformStyle = function(x,y){
  var style = "rotateX("+x+"deg) rotateY("+y+"deg)";
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;
  inner.style.msTransform = style;
  inner.style.oTransform = style;
}

var update = function(event){
  mouse.updatePosition(event);
  updateTransformStyle(
    //Convert a number into a string, keeping only two decimals:
    (mouse.y/inner.offsetHeight/2).toFixed(2),
    (mouse.x/inner.offsetWidth/2).toFixed(2)
  );
};

var onMouseEnterHandler = function(event){ //set up several handler functions for receiving events
  update(event);
};
var onMouseLeaveHandler = function(){
  inner.style = "";
};
var onMouseMoveHandler = function(event){
  if(isTimeToUpdate()){ // means if the function returns true
    update(event);
  }
};


container_div.onmouseenter = onMouseEnterHandler;
container_div.onmouseleave = onMouseLeaveHandler;
container_div.onmousemove = onMouseMoveHandler;


var A_CT1_div = document.getElementById("content_text_one");
var A_P1_div = document.getElementById("one_photo");
var A_CT2_div = document.getElementById("content_text_two");
var A_P2_div = document.getElementById("two_photo");

function ADD_styles_one(){
  A_CT1_div.classList.add("up_class");
  A_P1_div.classList.add("up_class");

  A_CT1_div.classList.remove("off_class");
  A_P1_div.classList.remove("off_class");

  A_CT1_div.style.opacity = "1";
  A_P1_div.style.opacity = "1";
  A_CT2_div.style.opacity = "1";
  A_P2_div.style.opacity = "1";
}

function REMOVE_styles_one(){
  A_CT1_div.classList.remove("up_class");
  A_P1_div.classList.remove("up_class");

  A_CT1_div.classList.add("off_class");
  A_P1_div.classList.add("off_class");

  A_CT1_div.style.opacity = "0";
  A_P1_div.style.opacity = "0";
  A_CT2_div.style.opacity = "0";
  A_P2_div.style.opacity = "0";
}

function Add_the_suitable_wheel_event(){
  var ABOUT_page_body = document.body;
  if(ABOUT_page_body.addEventListener){
    ABOUT_page_body.addEventListener("mousewheel", Check_wheel, false);
    ABOUT_page_body.addEventListener("DOMMouseScroll", Check_wheel, false);
  }
  else{
    ABOUT_page_body.attachEvent("onmousewheel", Check_wheel);
  }
}
function hasTouch() {
return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
}

function Check_wheel(){ //can be used throughtout the webpage for adding new style
  if (hasTouch()){
   ADD_styles_one();
 }
  else{
    var e = window.event || event;
  var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;
  var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if((scrollTop >= 1300) && (delta == 1)){ //downward
    ADD_styles_one();
  }
  else if((scrollTop <= 900) && (delta == -1)){
    REMOVE_styles_one();
  }
  }
}
