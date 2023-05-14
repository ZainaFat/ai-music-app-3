song1="";
song2="";
function preload(){
    song1=loadSound("avengers.mp3");
    song2=loadSound("disney.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet (video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
rightWristX =0;
rightWristY =0;

leftWristX =0;
rightWristY =0;
function modelLoaded(){
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if (results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x-30;
        leftWristY = results[0].pose.leftWrist.y+8;
        console.log("Left Wrist x = "+results[0].pose.leftWrist.x);
        console.log("Left Wrist y = "+results[0].pose.leftWrist.y);
 
        rightWristX = results[0].pose.rightWrist.x-30;
        rightWristY = results[0].pose.rightWrist.y+8;
        console.log("Right Wrist x = "+results[0].pose.rightWrist.x);
        console.log("Right Wrist y = "+results[0].pose.rightWrist.y);


    }
}
