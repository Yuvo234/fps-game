
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let angle = 0;
let x = canvas.width / 2;
let y = canvas.height / 2;

document.getElementById('startBtn').onclick = () => {
  canvas.requestPointerLock();
  document.getElementById('startBtn').style.display = 'none';
};

document.addEventListener('pointerlockchange', () => {
  if (document.pointerLockElement === canvas) {
    document.addEventListener('mousemove', onMouseMove, false);
  } else {
    document.removeEventListener('mousemove', onMouseMove, false);
  }
});

function onMouseMove(e) {
  angle += e.movementX * 0.01;
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.fillStyle = "#0f0";
  ctx.fillRect(-25, -25, 50, 50);
  ctx.restore();
  requestAnimationFrame(gameLoop);
}

gameLoop();
