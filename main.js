import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ); 
const renderer = new THREE.WebGLRenderer(); 
let model;

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  loader.load("./models/SIKA_LOGO.gltf", function(gltf) {
    model = gltf.scene
    scene.background = new THREE.Color('skyblue');
    scene.add(model);
    animate();
  });

  camera.position.z = 5;
  camera.position.x = -10;
  camera.position.y = -10;
}

function animate() {
  requestAnimationFrame(animate);

  if (model) {
    model.rotation.x += 0.01;
  }

  renderer.render(scene, camera);
}

init();
 
