// Import the necessary Three.js modules
import * as THREE from 'three';
import {
  GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

// Create a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the glTF model
const loader = new GLTFLoader();
loader.load("https://gary-cpu.github.io/threejs-starter-practice/models/sika.glb", (gltf) => {
    // Add the loaded model to the scene
    scene.add(gltf.scene);
});

// Set the camera position
camera.position.z = 5;
scene.background = new THREE.Color('skyblue');

// Create an animation loop
const animate = () => {
    requestAnimationFrame(animate);
    // Rotate the model or perform other animations here
    renderer.render(scene, camera);
};

animate();
