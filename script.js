let btn = document.getElementById ('button');
let buy = document.getElementById('buy');
let mac = document.getElementById('mac');
let closed = document.getElementById('closed');

btn.addEventListener('click', function() {
    mac.classList.add('open')
})

closed.addEventListener('click', function() {
    mac.classList.remove ('open') 
})

const productOne = document.getElementById('productOne')
const nav = document.getElementById('nav');
const closeTime = document.getElementById('closeTime')


nav.addEventListener('click', function() {
    productOne.style.display = 'block'; 
});

closeTime.addEventListener('click', function () {
    productOne.style.display = 'none';
});



const productTwo = document.getElementById('productTwo');
const cls = document.getElementById('cls')
carandash.addEventListener('click', function() {
    productTwo.style.display = 'block';
})

cls.addEventListener('click', function(){
    productTwo.style.display = 'none'
})

const bags = document.getElementById('bags');
const productThree = document.getElementById('productThree');
const clx = document.getElementById('clx')

bags.addEventListener('click', function(){
    productThree.style.display = 'block';
})

clx.addEventListener('click', function(){
    productThree.style.display = 'none'
})


const noj = document.getElementById('noj');
const productFive = document.getElementById('productFive');
const cles = document.getElementById('cles');

noj.addEventListener('click', function(){
    productFive.style.display = 'block'
})

cles.addEventListener('click', function(){
    productFive.style.display = 'none'
})


const pen = document.getElementById('pen');
const clos = document.getElementById('clos');
const productSix = document.getElementById('productSix');

pen.addEventListener('click', function(){
    productSix.style.display = 'block';
})

clos.addEventListener('click', function(){
    productSix.style.display = 'none'
})

const toch = document.getElementById('toch');
const productSeven = document.getElementById('productSeven');
const closs = document.getElementById('closs');

toch.addEventListener('click', function(){
    productSeven.style.display = 'block';
})

closs.addEventListener('click', function(){
    productSeven.style.display = 'none'
})