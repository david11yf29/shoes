const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
// console.log(shoes);
const gradients = document.querySelectorAll('.gradient');
// console.log(gradients);
const shoeBg = document.querySelector('.shoeBackground');
// console.log(shoeBg);

let prevColor = "blue";
let animationEnd = true;

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor() {
    if(!animationEnd) return;
    // 先去抓取 primary="#456123" primary 裡面的 hexcode
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    // 抓取 shoe 裡面有 我們要的 color 這個 attribute
    let shoe = document.querySelector(`.shoe[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);


    shoes.forEach(shoe => shoe.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(gradient => gradient.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false; 

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight() {
    if (x.matches) {
        // shoes 表示此 NodeList, 我們要第一個 [0] 的高度 
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    } else {
        shoeBg.style.height = "475px";
    }
}

window.addEventListener('resize', changeHeight);