// JavaScript for interactivity and animations

// Function to create floating objects
function createFloatingObjects() {
    const container = document.querySelector('.floating-objects');
    for (let i = 0; i < 10; i++) {
        const object = document.createElement('div');
        object.className = 'floating-object';
        object.style.position = 'absolute';
        object.style.width = '50px';
        object.style.height = '50px';
        object.style.borderRadius = '50%';
        object.style.backgroundColor = 'rgba(255, 0, 127, 0.5)';
        object.style.top = Math.random() * 100 + 'vh';
        object.style.left = Math.random() * 100 + 'vw';
        object.style.transform = 'translate(-50%, -50%)';
        container.appendChild(object);
        
        // Animate floating objects
        animateObject(object);
    }
}

// Function to animate floating objects
function animateObject(object) {
    const animationDuration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    object.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-20px)' },
        { transform: 'translateY(0)' }
    ], {
        duration: animationDuration * 1000,
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

// Initialize floating objects
createFloatingObjects();
