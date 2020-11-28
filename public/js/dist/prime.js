


const pro2 = document.querySelector('.project2')
const pro1 = document.querySelector('.project1')
let img1 = document.querySelector('#pro1img')
let img2 = document.querySelector('#pro2img')
let modal = document.querySelector('.modal-content')


    // $(img1).attr('src', '/img/hooper-list.png');
    // $(img2).attr('src', '/img/deskpre.webp')



pro1.addEventListener('click', function (){
    modal.style.display = 'block';
    modal.style.height = '100%';
    modal.style.width = '100%';
    modal.style.position = 'fixed';
    img1.src = "img/hooper-list.png"
})

pro2.addEventListener('click', function (){
    modal.style.display = 'block';
    modal.style.height = '100%';
    modal.style.width = '100%';
    modal.style.position = 'fixed';
    img2.src = 'img/logo.png'
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
