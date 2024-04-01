let text = document.getElementById("text_animasinya")
let button = document.getElementById("btn-contact")

let i = 0

let textnya = 'let Greeting = "Halo saya👋️" <br><br>let Name = "Muhammad Andra Fauzi" <br><br> let Career = "Web Developer👏️👏️"'

let array = []

let content = setInterval(() => {
    array.push(textnya[i])
    i++
    text.innerHTML = array.join("")
}, 150);

if(i == textnya.length){
    clearInterval(content)
}

