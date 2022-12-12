var userInput=document.querySelectorAll(".input")
var checkBtn=document.querySelector(".submit-form-btn")
var output=document.querySelector("#output")

function calculate(base,height){

    var formula=1/2*base*height
    return formula
}

function calculateArea(){

    if(Number(userInput[0].value),Number(userInput[1].value) > 0){

    var area=calculate(Number(userInput[0].value),Number(userInput[1].value))

        if(area > 0){

    output.innerText=("The area of the triangle is " + area)
        }

}else{

    showMessage("The area of a triangle cannot be negative")
}

function showMessage(msg){

    output.innerText=msg
}
}


checkBtn.addEventListener("click",calculateArea)


