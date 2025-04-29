import * as THREE from 'https://cdn.skypack.dev/three@0.150.1';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa3d5f7);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(3,3,3);
camera.lookAt(0,0,0);
//camera.position.z = 20;
//camera.position.x =

//const camera = new THREE.CubeCamera(1, 1000, 256);
//camera.position.set(0,0,0);

//const camera = new THREE.StereoCamera();

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 빛
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,5,5);
scene.add(light);

// 바닥 (잔디)
const groundGeometry = new THREE.CircleGeometry(5, 64);
const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x228B22 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = - Math.PI / 2;
scene.add(ground);

// 나무 만들기 함수
function createTree(x, z) {
  const trunkGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.5);
  const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
  const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
  trunk.position.set(x, 0.25, z);

  const leafGeometry = new THREE.SphereGeometry(0.2, 16, 16);
  const leafMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
  const leaf = new THREE.Mesh(leafGeometry, leafMaterial);
  leaf.position.set(x, 0.6, z);

  scene.add(trunk);
  scene.add(leaf);
}

// 샘플: 랜덤하게 나무 몇 개 심기
for (let i = 0; i < 10; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 4;
  createTree(Math.cos(angle) * radius, Math.sin(angle) * radius);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();