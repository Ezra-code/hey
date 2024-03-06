const clickbtn = document.getElementById('btn')
const formbtn = document.getElementById('frmbtn')

clickbtn.addEventListener("click", ()=>{
    console.log("Button clicked")
})

formbtn.addEventListener("click", ()=>{
    const inputfild = document.getElementById('inpt').value
    if(inputfild === ""){
        console.log("no data typed")
    }else(
        console.log(inputfild)
    )
})