video = "";

function setup(){
    canvas = createCanvas(480, 350);
    canvas.center();
    video = createCapture(480, 350);
    video.hide();
}

function draw(){
    image(video, 0, 0, 480, 350);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}