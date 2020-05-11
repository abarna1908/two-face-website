
var bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", changeFace, false);

//set Image dimensions

var screenWidth = screen.width - 100;
document.getElementById("box2").style.width = screenWidth / 4 + "px";
document.getElementById("box1").style.width = screenWidth / 4 + "px";


var xDirection = "";
var maxWidth = screenWidth / 2;
var oldX = 0;
function changeFace(e) {
    xDirection = getMouseDirection(e);

    var box1Width = document.getElementById("box1").offsetWidth;
    var box2Width = document.getElementById("box2").offsetWidth;
    if (xDirection == "left") {
        moveLeft(box1Width, box2Width);
    }
    else {
        moveRight(box1Width, box2Width);
    }
}
function moveLeft(box1Width, box2Width) {
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2")
    if (box2Width < maxWidth) {
        box2.style.width = box2Width + 10 + "px";
        box1.style.width = box1Width - 10 + "px";

        //Reduce opacity
        percentage = getPercentage(box1Width, screenWidth / 4);
        document.getElementById("webDes").style.opacity = percentage>0.2? percentage: 0;
        //Increase opcity
        percentage = getPercentage(box2Width, screenWidth / 2);
        document.getElementById("webDev").style.opacity = percentage>0.2? percentage: 0;

        //Move picture Left
        picPosition = document.getElementById("portfolio-home").offsetLeft;
        console.log(picPosition)
        maxLeft = 150;
        document.getElementById("portfolio-home").style.left = picPosition>maxLeft? picPosition-4 +"px" : picPosition+"px";

    }

}
function moveRight(box1Width, box2Width) {
    if (box1Width < maxWidth) {
        document.getElementById("box2").style.width = box2Width - 10 + "px";
        document.getElementById("box1").style.width = box1Width + 10 + "px";
        percentage = getPercentage(box2Width, screenWidth / 4);
        document.getElementById("webDev").style.opacity = percentage>0.2? percentage: 0;
        percentage = getPercentage(box1Width, screenWidth / 2);
        document.getElementById("webDes").style.opacity = percentage>0.2? percentage: 0;

        //Move Pic Right
        picPosition = document.getElementById("portfolio-home").offsetLeft;
        maxRight = screenWidth - 150;
        document.getElementById("portfolio-home").style.left = picPosition<maxRight? picPosition+4 +"px" : picPosition+"px";
    }
}
function getPercentage(width, total) {
    return ((width * 100) / total) / 100;    
}
function getMouseDirection(e) {
    //deal with the horizontal case
    if (oldX < e.pageX) {
        xDirection = "right";
    } else {
        xDirection = "left";
    }

    oldX = e.pageX;

    return xDirection;
}
