
const correctAnswers = ["A","B","A","B"]

const form = document.querySelector("form")

const div  = document.querySelector(".result")

const span = document.querySelector("span")




form.addEventListener("submit", e => {

    e.preventDefault()
    let score = 0

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25
        }
        console.log(score);
    })

    scrollTo(0,0);

    div.classList.remove("d-none")
   

let output = 0
const timer = setInterval( () => {
span.innerText = `${output}%`
if(output === score){
    clearInterval(timer)
}
else{
    output++
}
}, 7)

form.reset()

});