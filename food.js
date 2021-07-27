
var typed = new Typed('#h1', {
    strings: ['WELLCOME', 'TO','MY WABESITE'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
  });   

let menu=document.querySelector('.menu');
let nav=document.querySelector('#nav');
menu.addEventListener('click',()=>{
    nav.classList.toggle('active');
});

// let img_2=document.querySelector('.img_2');
// let images=['images2.jpg','hdimg.jpg','hdimg_2.webp'];
// setInterval(()=>{
//     let number=Math.floor(Math.random()*3);
//     img_2.src=images[number];
// },1500)


window.addEventListener('scroll',()=>{
let top=document.querySelector('#top');

    const scrolled= Math.ceil(window.scrollY);
    // console.log(scrolled);
    if(scrolled>200){
        top.style.display="block";
    }else if(scrolled<199){
        top.style.display="none";
    }
})