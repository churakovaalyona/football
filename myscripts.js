function changeColor() {
    const colors = ['red', 'green'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeColor, 3000);
