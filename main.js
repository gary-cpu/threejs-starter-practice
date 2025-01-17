import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
let model;
let angle = 0;

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const loader = new GLTFLoader();
  loader.load("./models/sika.glb", function(gltf) {
    model = gltf.scene
    scene.background = new THREE.Color('skyblue');
    scene.add(model);
    gltf.scene.rotation.z = Math.PI / 2;
    animate();
  });
  camera.position.set(30,0,0);
  camera.up = new THREE.Vector3(0,0,1);
  camera.lookAt(new THREE.Vector3(0,0,0));

}
function animate() {
  // Use Math.cos and Math.sin to set camera X and Z values based on angle

  // Other animation logic...
}


function animate() {
  requestAnimationFrame(animate);
  let radius = 5;
//  if (model) {
//    model.rotation.y += 0.01;
//  }
  camera.position.x = radius * Math.cos(angle);
  camera.position.z = radius * Math.sin(angle);
  angle += 0.01;
  renderer.render(scene, camera);
}

init();
