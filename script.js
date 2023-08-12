document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
// Get all flip card elements
const flipCards = document.querySelectorAll('.flip-card');

// Loop through each flip card and add event listeners
flipCards.forEach(flipCard => {
    // Get the inner flip card element
    const flipCardInner = flipCard.querySelector('.flip-card-inner');

    // Add event listener for hover
    flipCard.addEventListener('mouseenter', () => {
        flipCardInner.style.transform = 'rotateY(180deg)';
    });

    flipCard.addEventListener('mouseleave', () => {
        flipCardInner.style.transform = 'rotateY(0deg)';
    });
});


    const container = document.getElementById('skp-container');

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    // Load the .skp model
    const loader = new THREE.SKPLoader();
    loader.load('wahthad.skp', (skp) => {
        scene.add(skp);
    });

    // Add lighting
    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    // Animation loop
    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };

    animate();

