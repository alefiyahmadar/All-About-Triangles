var triangleSide = document.querySelectorAll(".input")
var checkBtn =document.querySelector(".submit-form-btn")
var output= document.querySelector("#output")



function squareOfSides(side1,side2){

    var hypoFormula=Math.sqrt(side1*side1+side2*side2)
    return hypoFormula
}

function calculateHypo(){

    var hypoTenuse=squareOfSides(Number(triangleSide[0].value),Number(triangleSide[1].value))
    output.innerText=("The hypotenuse is " + hypoTenuse)
}

checkBtn.addEventListener("click",calculateHypo)