const quizForm=document.querySelector("#quiz-form")
const submitBtn=document.querySelector(".submit-form-btn")
const outputScore=document.querySelector("#output")


const rightAnswer=["6","Isosceles Triangle","180°","90°","One Right-Angle","75°","Acute-Angled Triangle","85°","No","45°"]



function showScore(){
    let score =0
    let index=0

    var formResult=new FormData(quizForm)
    for (let values of formResult.values())
    
    {

        if(values === rightAnswer[index]){

            score = score + 1
        }

        index=index + 1
       
    }
    outputScore.innerText=("Your score is " + score)
}




submitBtn.addEventListener("click",showScore)