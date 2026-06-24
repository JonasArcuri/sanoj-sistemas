/* ============================================================
   SANOJ SISTEMAS — main.js
   Three.js animated background + UI interactions
   ============================================================ */

// ============================================================
// 1. THREE.JS SCENE SETUP
// ============================================================
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0A111A, 0.028);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const canvas = document.querySelector('#bg-canvas');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// ============================================================
// 2. ICOSAHEDRON (main tech object)
// ============================================================
const icoGeo = new THREE.IcosahedronGeometry(12, 2);
const icoMat = new THREE.MeshBasicMaterial({
    color: 0x56C5FF,
    wireframe: true,
    transparent: true,
    opacity: 0.13
});
const techMesh = new THREE.Mesh(icoGeo, icoMat);
techMesh.position.set(15, 0, 0);
scene.add(techMesh);

// ============================================================
// 3. DIGITAL GRID (interactive wave plane)
// ============================================================
const gridGeo = new THREE.PlaneGeometry(160, 160, 60, 60);
const count = gridGeo.attributes.position.count;
const zBase = new Float32Array(count);

for (let i = 0; i < count; i++) {
    zBase[i] = (Math.random() - 0.5) * 0.5;
    gridGeo.attributes.position.setZ(i, zBase[i]);
}

const gridMat = new THREE.MeshBasicMaterial({
    color: 0x56C5FF,
    wireframe: true,
    transparent: true,
    opacity: 0.1
});

const digitalGrid = new THREE.Mesh(gridGeo, gridMat);
digitalGrid.rotation.x = -Math.PI / 2.2;
digitalGrid.position.y = -15;
scene.add(digitalGrid);

// ============================================================
// 4. MOUSE & SCROLL TRACKING
// ============================================================
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;
const halfW = window.innerWidth / 2;
const halfH = window.innerHeight / 2;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX - halfW;
    mouseY = e.clientY - halfH;
});

let scrollY = window.scrollY;
window.addEventListener('scroll', () => { scrollY = window.scrollY; });

// ============================================================
// 5. ANIMATION LOOP
// ============================================================
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Rotate icosahedron
    techMesh.rotation.y += 0.002;
    techMesh.rotation.x += 0.001;
    techMesh.rotation.z += 0.0005;

    // Smooth mouse follow
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    techMesh.position.x += (15 + targetX * 10 - techMesh.position.x) * 0.05;
    techMesh.position.y += (targetY * 10 - techMesh.position.y) * 0.05;

    // Wave grid
    const positions = digitalGrid.geometry.attributes.position;
    const mappedMX = targetX * 80;
    const mappedMY = targetY * 80;

    for (let i = 0; i < count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const dist = Math.sqrt((x - mappedMX) ** 2 + (y + mappedMY) ** 2);
        let z = zBase[i];
        if (dist < 25) z += (25 - dist) * 0.5;
        z += Math.sin(t * 2 + x * 0.1 + y * 0.1) * 0.4;
        positions.setZ(i, z);
    }
    positions.needsUpdate = true;

    // Camera scroll drift
    camera.position.y = -(scrollY * 0.008);

    renderer.render(scene, camera);
}

animate();

// ============================================================
// 6. RESIZE HANDLER
// ============================================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================================
// 7. SERVICES INTERACTIVE TABS
// ============================================================
const serviceItems = document.querySelectorAll('.service-item');
const visualPanels = document.querySelectorAll('.service-visual-panel');

serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        serviceItems.forEach(s => s.classList.remove('active'));
        visualPanels.forEach(vp => vp.classList.remove('active'));

        item.classList.add('active');
        const target = document.getElementById('sv-' + item.dataset.service);
        if (target) target.classList.add('active');
    });
});

// ============================================================
// 8. MOBILE MENU TOGGLE
// ============================================================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
}

// ============================================================
// 9. SCROLL REVEAL (IntersectionObserver)
// ============================================================
const revealEls = document.querySelectorAll(
    '.service-item, .tech-logo-card, .showcase-card, .why-item, .process-step, .portfolio-tabs'
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger with delay based on element index
            const delay = (i % 4) * 80;
            entry.target.style.animationDelay = delay + 'ms';
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.animationPlayState = 'paused';
    revealObserver.observe(el);
});

// ============================================================
// 10. TECH STRIP — duplicate items for seamless loop
// ============================================================
const stripInner = document.querySelector('.tech-strip-inner');
if (stripInner) {
    const clone = stripInner.cloneNode(true);
    stripInner.parentElement.appendChild(clone);
}

// ============================================================
// 11. NAVBAR SCROLL EFFECT
// ============================================================
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 17, 26, 0.92)';
    } else {
        navbar.style.background = 'rgba(10, 17, 26, 0.7)';
    }
});
