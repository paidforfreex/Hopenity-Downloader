console.let video = document.getElementById("videoPlayer");
let downloadBtn = document.getElementById("downloadBtn");

function loadVideo(){

let link = document.getElementById("videoLink").value.trim();

if(!link){
alert("Paste a valid video link!");
return;
}

// HLS (.m3u8) support
if(Hls.isSupported() && link.endsWith(".m3u8")){
var hls = new Hls();
hls.loadSource(link);
hls.attachMedia(video);
hls.on(Hls.Events.MANIFEST_PARSED,function(){
video.play();
});
} else {
video.src = link;
video.play();
}

// Set download button
downloadBtn.href = link;

}