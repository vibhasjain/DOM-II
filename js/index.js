// Your code goes here

let logoHeading = document.querySelector('.logo-heading');
let navLinks = document.querySelectorAll('.nav-link');
let introImg = document.querySelector('.intro img');
let body = document.querySelector('body');
let text = document.querySelectorAll('p');
let imgContent = document.querySelectorAll('.img-content');

console.log(logoHeading);

function popMe(event) {
    console.log('pop');
    event.target.style.transform = 'scale(1.5,1.5)';
}

function navColorChange(event) {
    if (event.code === 'KeyG'){
        console.log('yo');
        navLinks.forEach(element => {
            element.style.color = 'green';
        });
        };
    }

let rotation = 0;

function rotateIntroImg(event){
    rotation += 1;
    introImg.style.transform = `rotateX(${rotation}deg)`;
    console.log('me');
}

function colorLogo(event) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    logoHeading.style.color = "#" + randomColor;
}

function bgColor(event) {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = "#" + randomColor;
}

function welcome(event) {
    body.style.backgroundColor = 'grey';
    console.log('yo');
    setTimeout(function() {
        body.style.backgroundColor = 'white';
      }, 1000);
}

function textBG(event){ 
    event.target.style.backgroundColor = 'grey';
    console.log('sdsdsd');
}


logoHeading.addEventListener('mouseover',popMe);
document.addEventListener('keydown',navColorChange);
document.onwheel = colorLogo;
window.addEventListener('load',welcome);

navLinks.forEach(link => {
    link.addEventListener('focus', welcome);
    link.addEventListener('click', (event) => event.preventDefault())
});

document.onscroll = rotateIntroImg;
window.onresize = bgColor;
// document.addEventListener('select',textBG);

text.forEach(element => {
    element.addEventListener('select',textBG);    
});

function flipMe(event) {
    // console.log('flipper');
    if (event.target.style.transform === `rotateY(180deg)`) {
        event.target.style.transform = `rotateY(0deg)`;
    } else {
        event.target.style.transform = `rotateY(180deg)`;
    }
}

let contentSection = document.querySelector('.content-section');
contentSection.addEventListener('click', event => console.log('propogated'))

imgContent.forEach(img => {
    img.addEventListener('dblclick', flipMe);
    img.addEventListener('click', showStopper);
})

function showStopper(event){
    console.log('Stopping the propogation');
    event.stopPropagation();
}

document.addEventListener('dragstart', event => event.target.style.color = 'blue');
document.addEventListener('dragend', event => event.target.style.color = 'orange');

