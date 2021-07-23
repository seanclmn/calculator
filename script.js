let display = document.querySelector("h2")

function place(num){
    let button = document.getElementById(num+"_button")
    button.addEventListener("click",function(){
    display.innerHTML += num
})
}
place("*"),place("-"),place("0"),place("1"),place("2"),place("3"),place("+"),place("4"),place("5"),place("6"),place("7"),place("8"),place("9"),place("/")



document.getElementById("=_button").addEventListener("click",function(){
    display.innerHTML = eval(display.innerHTML)
})

document.getElementById("clear").addEventListener("click",function(){
    display.innerHTML = ""
})


document.getElementById(">_button").addEventListener("click",function(){
    display.innerHTML= display.innerHTML.slice(0,-1)
})



