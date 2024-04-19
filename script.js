const bodyE1 = document.querySelector("body")
const buttonE1 = document.querySelector("button")
const card = document.querySelector(".card")

buttonE1.addEventListener('click', (event)=>{
    buttonE1.classList.add("hidden")
    card.classList.remove("hidden")
    
})

card.addEventListener('mousemove', (event)=>{
    const xpos = event.offsetX
    const ypos = event.offsetY

    const spanE1 = document.createElement("span")
    spanE1.style.left = xpos + "Px"
    spanE1.style.top = ypos + "Px"

    const size = Math.random()*100
    spanE1.style.width = size + "Px"
    spanE1.style.height = size + "Px"

    bodyE1.appendChild(spanE1)
    setTimeout(()=>{
        spanE1.remove()
    },3000)
})