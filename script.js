// Select the color picker, shape selector, and body element
const colorPicker = document.getElementById('colorPicker');
const shapePicker = document.getElementById('shapePicker');
const body = document.body;

// Store the current cursor color and shape
let currentColor = '#00ffcc';  // Default color (cyan)
let currentShape = 'circle';   // Default shape

// Function to create a trail particle
function createTrail(x, y) {
  const numParticles = 1; // Number of particles to create per mouse move
  
  // Create multiple trail particles
  for (let i = 0; i < numParticles; i++) {
    const trail = document.createElement('div');
    trail.classList.add('trail', currentShape); // Add the selected shape class
    
    // Set position of the trail particle
    trail.style.left = `${x - (i * 5)}px`; // Slight offset for multiple particles
    trail.style.top = `${y - (i * 5)}px`;

    trail.style.backgroundColor = currentColor;  // Set the color of the trail particle
    trail.style.boxShadow = `0 0 10px ${currentColor}, 0 0 20px ${currentColor}`;  // Set the glow effect

    document.body.appendChild(trail);
    
    // Remove the trail particle after the animation duration (500ms)
    setTimeout(() => {
      trail.remove();
    }, 500);
  }
}

// Listen for mouse movements
document.addEventListener('mousemove', (e) => {
  // Create multiple trail particles at the mouse position
  createTrail(e.pageX, e.pageY);
});

// Update the cursor's color based on the color picker
colorPicker.addEventListener('input', (e) => {
  currentColor = e.target.value;  // Update the current color
});

// Update the cursor's shape based on the shape picker
shapePicker.addEventListener('change', (e) => {
  currentShape = e.target.value;  // Update the current shape (circle, square, or line)
});
