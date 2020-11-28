let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');
let topp = document.querySelector('.top');
let toggleIcon = document.querySelector('.toggle-icon');
function modeToggle() {
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        if(window.getComputedStyle( document.body ,null).getPropertyValue('background-color') === 'rgb(22, 23, 34)') {
            topp.style.backgroundImage = "url('images/bg-desktop-light.jpg')";
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        } else if(window.getComputedStyle( document.body ,null).getPropertyValue('background-color') === 'rgb(250, 250, 250)'){
            topp.style.backgroundImage = "url('images/bg-desktop-dark.jpg')";
            

            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
    });
}

modeToggle();