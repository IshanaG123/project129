song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;



function preload()
{
song = loadSound("music.mp3");
song = loadSound("Fifty-Fifty-Cupid-Twin-Version-(Gospeljingle.com).mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);
        console.log("score")
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +"leftWristY = " +  leftWristY )

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY)
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FFC0CB");
    stroke("#FFC0CB");

    if(scoreLeftWrist > 0.2){
        circle(leftWristX, leftWristY,20);
        InNumberleftWristY = Number(leftWristY);
        remove_decimals = floor(InNumberleftWristY);
        volume = remove_decimals/500;
        volume = leftWristY_divide_1000 *2;
        document.getElementById("idontknowsong").innerHTML = "I don't know song = " + idontknowsong;
        song.setSong(idontknowsong);
    }
    
    }


function songname() {
    song.play("music.mp3");
    song.setVolume(1);
    song.rate(1);
}