var userInput=document.querySelectorAll(".input")
var checkBtn=document.querySelector(".submit-form-btn")
var output=document.querySelector("#output")

function calculate(base,height){

    var formula=1/2*base*height
    return formula
}

function calculateArea(){

    var area=calculate(Number(userInput[0].value),Number(userInput[1].value))

    output.innerText=("The area of the triangle is " + area)

}




checkBtn.addEventListener("click",calculateArea)


