const typewriterdiv = document.querySelector('.type');
var typing= new Typed(typewriterdiv, {
  // add 
  strings: ['',  'DATA', 'VTU', 'SME'],
  typeSpeed:200,
  loop: true, 
  showCursor: false,
  fadeOutClass: 'typed-fade-in'
});

let buyNow = document.querySelector('.buy')
console.log(buyNow);
buyNow.addEventListener('click', ()=>{
  window.location = '../Pages/Register.html'
})
let navBtn = document.querySelector('.buy-data')
console.log(navBtn);
navBtn.addEventListener('click', function(){
  window .location = '../Pages/login.html'
})


// let heroBtn1 = document.querySelector('.buy')
// console.log(heroBtn1);
// heroBtn1.addEventListener('click', function(){
//   Window.location = '../Pages/disclamer.html'
// })

// let mediaNav = document.querySelector('.hover-show')

// let dropDown = document.querySelector('.drop-down')

// mediaNav.addEventListener('click',()=>{
//   if (dropDown.style.display = 'none') {
//     dropDown.style.display = 'flex'
//   } else {
//     dropDown.style.display = 'none'
//   }

// })