// slideshow Code

let imgStr = ["https://firebasestorage.googleapis.com/v0/b/fixedfitnesswebsite.appspot.com/o/slideshow%2Fslide0.jpg?alt=media&token=3551e2a0-2549-40ca-af0d-c2622b1419d9",
            "https://firebasestorage.googleapis.com/v0/b/fixedfitnesswebsite.appspot.com/o/slideshow%2Fslide1.jpg?alt=media&token=627a8f0e-c039-483c-8419-917c07da409d",
            "https://firebasestorage.googleapis.com/v0/b/fixedfitnesswebsite.appspot.com/o/slideshow%2Fslide2.jpg?alt=media&token=6363d19f-f7cb-4b1d-9c09-f7df5bd3db26",
            "https://firebasestorage.googleapis.com/v0/b/fixedfitnesswebsite.appspot.com/o/slideshow%2Fslide3.jpg?alt=media&token=0f6825c6-e635-43b0-b712-d01bf2b4dfc5"]

let idx = 1;


setInterval(slideshowNext, 4000);
 
function slideshowNext() {

    let dots = document.querySelectorAll(".dot")
    dots[idx-1].classList.remove("active");

    if (idx === 4) {
        idx = 0;
    }

    dots[idx].classList.add("active");

    let str = `

    <div class="slide fade">
        <img class="slideshowImage" src=${imgStr[idx]} alt="">`
    let slideshow = document.querySelector(".slideArea");
    slideshow.innerHTML = str;

    idx+=1;

}


function slideshowPrev() {

    idx-=1;

    let dots = document.querySelectorAll(".dot")
    dots[idx].classList.remove("active");
    


    if (idx === 0) {
        idx = 4
    }; 

    dots[idx-1].classList.add("active");


    let str = `

    <div class="slide fade">
        <img class="slideshowImage" src=${imgStr[idx-1]} alt="">
`
    let slideshow = document.querySelector(".slideArea");
    slideshow.innerHTML = str;

    timer = 0;


}

// 

 function cancel() {
    let inp = document.querySelector('[name="searchProductInput"]');
    inp.value = "";
 }

 //redirect


 function openCart(){
    window.location = "cart.html";
 }
