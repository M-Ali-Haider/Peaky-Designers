const canvas = document.querySelector('#scene');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const ctx = canvas.getContext('2d');

if (window.devicePixelRatio > 1) {
  canvas.width = canvas.clientWidth * 2;
  canvas.height = canvas.clientHeight * 2;
  ctx.scale(2, 2);
}

let width = canvas.clientWidth;
let height = canvas.clientHeight;
let rotation = 0;
let dots = [];

let DOTS_AMOUNT =750;
let DOT_RADIUS = 3;
let GLOBE_RADIUS = width * 0.7;
let GLOBE_CENTER_Z = -GLOBE_RADIUS;
let PROJECTION_CENTER_X = width / 2; 
let PROJECTION_CENTER_Y = height / 2; 
let FIELD_OF_VIEW = width * 0.8;

let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let globeDragStartRotation = 0;

class Dot {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.xProject = 0;
    this.yProject = 0;
    this.sizeProjection = 0;
  }

  project(sin, cos) {
    const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
    const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
    this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
    this.xProject = (rotX * this.sizeProjection) + PROJECTION_CENTER_X;
    this.yProject = (this.y * this.sizeProjection) + PROJECTION_CENTER_Y;
  }

  draw(sin, cos) {
    this.project(sin, cos);
    ctx.beginPath();
    ctx.fillStyle = 'white'; // Set the color to white
    ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 10, Math.PI * 10);
    ctx.fill();
  }
}

function createDots() {
  dots.length = 0;
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = (GLOBE_RADIUS * Math.cos(phi)) + GLOBE_CENTER_Z;
    dots.push(new Dot(x, y, z));
  }
}

function render(a) {
    ctx.clearRect(0, 0, width, height);
  

    if (!isDragging) {
      rotation += 0.002;
    }
  
    const sineRotation = Math.sin(rotation);
    const cosineRotation = Math.cos(rotation);
  
    for (let i = 0; i < dots.length; i++) {
      dots[i].draw(sineRotation, cosineRotation);
    }
  
    window.requestAnimationFrame(render);
  }
function afterResize() {
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  GLOBE_RADIUS = width * 0.7;
  GLOBE_CENTER_Z = -GLOBE_RADIUS;
  PROJECTION_CENTER_X = width / 2;
  PROJECTION_CENTER_Y = height / 2;
  FIELD_OF_VIEW = width * 0.8;
  createDots();
}

let resizeTimeout;
function onResize() {
  resizeTimeout = window.clearTimeout(resizeTimeout);
  resizeTimeout = window.setTimeout(afterResize, 500);
}

window.addEventListener('resize', onResize);
canvas.addEventListener("mousedown", onMouseDown);
canvas.addEventListener("touchstart", onTouchStart);
canvas.addEventListener("mousemove", onMouseMove);
canvas.addEventListener("touchmove", onTouchMove);
canvas.addEventListener("mouseup", onMouseUp);
canvas.addEventListener("touchend", onTouchEnd);
canvas.addEventListener("mouseleave", onMouseLeave); // New event listener for mouseleave

function onMouseDown(event) {
  isDragging = true;
  dragStartX = event.clientX;
  dragStartY = event.clientY;
  globeDragStartRotation = rotation;
}

function onTouchStart(event) {
  event.preventDefault();
  isDragging = true;
  dragStartX = event.touches[0].clientX;
  dragStartY = event.touches[0].clientY;
  globeDragStartRotation = rotation;
}

function onMouseMove(event) {
  if (isDragging) {
    const dragX = event.clientX - dragStartX;
    const dragY = event.clientY - dragStartY;
    rotation = globeDragStartRotation + dragX * 0.005;
  }
}

function onTouchMove(event) {
  if (isDragging) {
    event.preventDefault();
    const dragX = event.touches[0].clientX - dragStartX;
    const dragY = event.touches[0].clientY - dragStartY;
    rotation = globeDragStartRotation + dragX * 0.0045;
  }
}

function onMouseUp(event) {
  isDragging = false;
}

function onTouchEnd(event) {
  isDragging = false;
}

function onMouseLeave() {
  isDragging = false; 
}
createDots();
window.requestAnimationFrame(render);
function updateDotsAmount() {
  if (window.innerWidth <= 500) {
    DOTS_AMOUNT =500;
    DOT_RADIUS=0.65;
  } else {
    DOTS_AMOUNT =750;
    DOT_RADIUS=3;
  }
}
updateDotsAmount();
function handleViewportChange() {
  updateDotsAmount();
  afterResize(); 
}
const mediaQuery = window.matchMedia('(max-width: 500px)');
mediaQuery.addListener(handleViewportChange);
function removeMediaQueryListener() {
  mediaQuery.removeListener(handleViewportChange);
}
