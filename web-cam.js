var video = document.createElement("video");

video.setAttribute("id","video");
video.setAttribute("autoplay", true);

function gotStream(stream) {
	window.stream = stream;
	let vid = document.getElementById("video");
	vid.srcObject = stream;
    document.body.append(vid);
}

function startVideo(){
	navigator.mediaDevices.getUserMedia({audio: false, video: true}).then(gotStream)
}

function stopVideo(){
	if(window.stream){
		window.stream.getTracks().forEach(function (track){
			track.stop();
		})
	}
}