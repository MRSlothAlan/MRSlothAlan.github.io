let Video_counter = 1;
let Video_tag = document.getElementById('Video');
let Video_source = document.getElementById('Video_source');




function VideoSwitch(){
    if (Video_counter > 2){
      Video_counter = 0;
    }
    switch(Video_counter){
      case 0:
      Video_source.setAttribute('src', '../video/1_making.MOV');
      break;
      case 1:
      Video_source.setAttribute('src', '../video/2_first_testing_Trim.mp4');
      break;
      case 2:
      Video_source.setAttribute('src', '../video/3_second_testing_Trim.mp4');
      break;
    }
    Video_tag.appendChild(Video_source);
    Video_tag.load();
    Video_tag.play();
    Video_counter++;
}
