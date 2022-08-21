let searchbtn=document.querySelector('#search-btn');
let searchbar=document.querySelector('.searchbar-container');
let menu=document.querySelector('#menu-btn');
let navbar= document.querySelector('.navbar');

window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
}

searchbtn.addEventListener('click',() =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
})

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

var swiper = new Swiper(".home-slider", {
    autoplay:{
        delay:4000,
        disableOnInteraction: false,
    },
pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  loop:true,
  grabCursor:true,
});

function BMICalc() {
    var h=document.getElementById('height').value;
    var w=document.getElementById('weight').value;
    var BMI=w/(h/100*h/100);
    var BMIo=(BMI.toFixed(2));

    let BMICategory;
    if(BMI < 18.5){
        BMICategory = "Underweight";
    } else if(BMI >= 18.5 && BMI <= 24.9){
        BMICategory = "Normal";
    } else if(BMI >= 25 && BMI <= 29.9){
        BMICategory = "Overweight";
    } else {
        BMICategory = "Obese";
    }

    document.getElementById("result").innerHTML="Your BMI is " + BMIo + " . You are " + `${BMICategory}` + " .";

}

