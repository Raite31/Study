import * as THREE from 'three';

// 设置场景、相机、渲染器
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const renderer = new THREE.WebGLRenderer();
// 把渲染器添加到HTML页面
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 创造一个几何体
const geometry = new THREE.BoxGeometry(1, 1, 1);
// 着色
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

// 渲染场景
function animate() {
	requestAnimationFrame(animate);

	// 为立方体设置动画
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
}
animate();
