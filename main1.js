import * as THREE from 'three';
import {
  GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
let model;
let angle = 0;

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  const loader = new GLTFLoader();
  loader.load("https://gary-cpu.github.io/threejs-starter-practice/models/sika.glb", function(gltf) {
    model = gltf.scene
    scene.background = new THREE.Color('skyblue');
    scene.add(model);
    gltf.scene.rotation.z = Math.PI / 2;
    //model.rotate.set(2, 0, 0)
    animate();
  });
  camera.position.set(0, 0, 4);
  camera.up = new THREE.Vector3(0, 1, 1);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

}


function animate() {
  requestAnimationFrame(animate);
  let radius = 1;
  if (model) {
    model.rotation.x += 0.01;
  }
  camera.position.x = radius * Math.cos(angle);
  camera.position.z = radius * Math.sin(angle);
  angle += 0.01;
  renderer.render(scene, camera);
}

init();
