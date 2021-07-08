let hum = document.querySelector('.humbroger');
let nav = document.querySelector('nav');

hum.addEventListener('click', (e)=>{
    nav.classList.toggle('active');
    hum.classList.toggle('active');
    console.log(hum.classList);
})