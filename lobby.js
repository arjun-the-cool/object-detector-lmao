status="";
function preload()
{
    img = "da coconut nut.jpg";
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}
function modelLoaded()
{
    console.log("M o d e l  L o a d e d !");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
}