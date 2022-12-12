var triangleSide = document.querySelectorAll(".input")
var checkBtn =document.querySelector(".submit-form-btn")
var output= document.querySelector("#output")



function squareOfSides(side1,side2){

    var hypoFormula=Math.sqrt(side1*side1+side2*side2)
    return hypoFormula
}

function calculateHypo(){
    if(Number(triangleSide[0].value),Number(triangleSide[1].value) > 0){

    var hypoTenuse=squareOfSides(Number(triangleSide[0].value),Number(triangleSide[1].value))
    showMessage("The hypotenuse is " + hypoTenuse)
    } else{

        showMessage("The hypotenuse of a triangle cannot be negative")
    }
}

function showMessage(msg){

    output.innerText=msg
}


checkBtn.addEventListener("click",calculateHypo)