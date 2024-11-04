const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');

const circle = {
    x: 20,    // Initial x position
    y: canvas.height / 2,
    radius: 10,
    speed: 2  // Adjust the speed as needed
};

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the circle
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.closePath();

    // Update the circle's position
    circle.x += circle.speed;

    // Reset position if it moves out of the canvas on the right side
    if (circle.x - circle.radius > canvas.width) {
        circle.x = -circle.radius; // Start from the left side again
    }

    requestAnimationFrame(drawCircle);
}

// Start the animation
drawCircle();
