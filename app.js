const togbtn=document.querySelectorAll(".btn");

togbtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        btn.parentNode.classList.toggle('active');
    })
})