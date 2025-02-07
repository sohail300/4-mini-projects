const video=document.querySelector('#video');
const play=document.querySelector('#play');
const stop=document.querySelector('#stop');
const progress=document.querySelector('#progress');
const timestamp=document.querySelector('#timestamp');

// Functions
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    } else{
        video.pause();
    }
}

function updateIcon(){
    if(video.paused){
        play.innerHTML='<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>'
    }
}

function stopVideo(){
    video.currentTime=0;
    video.pause();
}

function updateProgress(){
    progress.value=(video.currentTime/video.duration)*100;      // This is changing the value of progress bar so that the 'change' eventListener will be initiated

    let min=Math.floor(video.currentTime/60);
    if(min<10){
        min='0'+String(min);
    }
    
    let sec=Math.floor(video.currentTime%60);
    if(sec<10){
        sec='0'+String(sec);
    }
    timestamp.innerText=min+':'+sec;
}

function setVideoProgress(){
    video.currentTime=(parseInt(progress.value)*video.duration)/100;
}

// Event Listeners
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('play',updateIcon);      // for updating icon of play button...whenever the video will play
video.addEventListener('pause',updateIcon);      // for updating icon of play button
video.addEventListener('timeupdate',updateProgress);
progress.addEventListener('change',setVideoProgress);
play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);