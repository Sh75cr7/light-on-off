const OnBtn=document.querySelector('.On');
const offBtn=document.querySelector('.Off');
const img=document.querySelector('img')


OnBtn.addEventListener('click',()=>{
    img.src='./images/onB.jpeg';
})
offBtn.addEventListener('click',()=>{
    img.src='./images/offb.jpeg';
})
