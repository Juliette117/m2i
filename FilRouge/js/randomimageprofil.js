let images = [
    "./Assets/Images/stan.png",
    "./Assets/Images/kyle.png",
    "./Assets/Images/cartman.png",
    "./Assets/Images/kenny.png"
]
let image = document.querySelector(".randomimg img")
function randomimage(a) {
    let randomIndex=Math.floor((Math.random())*a.length);
    console.log(randomIndex);
    image.setAttribute("src",a[randomIndex]);
}
randomimage(images);