const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

const circle = {
    x: 20,
    y: canvas.height / 2,
    radius: 10,
    speed: 2
};

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();

    circle.x += circle.speed;

    if (circle.x - circle.radius > canvas.width) {
        circle.x = -circle.radius;
    }

    requestAnimationFrame(drawCircle);
}

drawCircle();
