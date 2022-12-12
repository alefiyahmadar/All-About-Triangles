
var userInput=document.querySelectorAll(".input")
var isTriangleBtn=document.querySelector(".submit-form-btn")
var output=document.querySelector("#output")

function calculateSum(angle1,angle2,angle3){

    var sum = angle1 + angle2 + angle3
    return sum
}

function showMessage(msg){
output.innerText=msg

}
function isTriangle(){

    var sumAngle = calculateSum(Number(userInput[0].value),Number(userInput[1].value),Number(userInput[2].value));
    if(Number(userInput[0].value),Number(userInput[1].value),Number(userInput[2].value) > 0){
    if (sumAngle === 180){

        showMessage("Yayy! It is a triangle")

    } else {
        showMessage("It is not a triangle!")
    }
}else{

    showMessage("Sides should be greater than 0")
}
}
 



isTriangleBtn.addEventListener("click" , isTriangle)





