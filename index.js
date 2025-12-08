// alert("JS CONNECTED")
const btn=document.querySelectorAll("button")
const icon=document.getElementById("no")
let sum=0;

btn.forEach(e => {
    e.addEventListener("click",()=>{
        e.style.backgroundColor="grey"
        sum+=1
        console.log(sum)
        icon.innerText=`(${sum})`
        if(sum>=4){
            icon.innerText=`(4)`
        }
    })
})




