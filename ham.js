document.addEventListener('DOMContentLoaded', ()=>{
    const hamBtn = document.getElementById('ham-btn')
    const navLinks = document.querySelector('.nav-links');

    hamBtn.addEventListener('click', ()=>{
        navLinks.classList.toggle('active');
    })
})