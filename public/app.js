const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
// console.log(shoes);
const gradients = document.querySelectorAll('.gradient');
// console.log(gradients);

let prevColor = "blue"

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor() {
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
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));