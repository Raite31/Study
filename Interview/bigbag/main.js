import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.126.1/build/three.module.js';
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/controls/OrbitControls.js';
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var cylinderRadius = 20;
var cylinderHeight = 50;
var numImages = 10;
var cylinderGeometry = new THREE.CylinderGeometry(
	cylinderRadius,
	cylinderRadius,
	cylinderHeight,
	32
);
var cylinderMaterial = new THREE.MeshBasicMaterial({
	color: 0xffffff,
	transparent: true,
	opacity: 0,
});
var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
scene.add(cylinder);
var cylinderGeometry2 = new THREE.CylinderGeometry(
	cylinderRadius,
	cylinderRadius,
	cylinderHeight,
	32
);
var cylinderMaterial2 = new THREE.MeshBasicMaterial({
	color: 0x111111,
	transparent: true,
	opacity: 0.5,
});
var cylinder2 = new THREE.Mesh(cylinderGeometry2, cylinderMaterial2);
scene.add(cylinder2);
var imageTexture = new THREE.TextureLoader().load('path/to/your/image.jpg');
var imageMaterial = new THREE.MeshBasicMaterial({
	map: imageTexture,
	side: THREE.DoubleSide,
});
var imageWidth = 10;
var imageMargin = 2;
var imageRadius = (numImages * (imageWidth + imageMargin)) / (2 * Math.PI);
var imageAngle = (imageWidth + imageMargin) / imageRadius;
var imageRotation = new THREE.Object3D();
var center = new THREE.Vector3(0, 0, 0); // 中心点坐标
for (var i = 0; i < numImages; i++) {
	var image = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), imageMaterial);
	var angle = i * imageAngle;
	var x = imageRadius * Math.sin(angle);
	var y = (i % 2 === 0 ? 1 : -1) * (imageWidth / 2);
	var z = imageRadius * Math.cos(angle);
	image.position.set(x, y, z);

	// 计算图片朝向中心点的角度
	var lookAtAngle = Math.atan2(
		center.z - image.position.z,
		center.x - image.position.x
	);
	image.rotation.y = -lookAtAngle - Math.PI / 2; // 右侧朝向中心点

	imageRotation.add(image);
}
scene.add(imageRotation);
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
camera.position.z = 70;
var mouseDown = false;
var mouseX = 0;
var mouseY = 0;
var targetX = 0;
var targetY = 0;
var autoRotateSpeed = 0.01;
var zoomSpeed = 0.1; // 缩放速度
function animate() {
	requestAnimationFrame(animate);
	if (!mouseDown) {
		imageRotation.rotation.y += autoRotateSpeed;
	}
	renderer.render(scene, camera);
}
animate();
document.addEventListener(
	'mousedown',
	function (event) {
		mouseDown = true;
		mouseX = event.clientX;
		mouseY = event.clientY;
		targetX = imageRotation.rotation.y;
		targetY = imageRotation.rotation.x;
	},
	false
);
document.addEventListener(
	'mousemove',
	function (event) {
		if (mouseDown) {
			var deltaX = event.clientX - mouseX;
			var deltaY = event.clientY - mouseY;
			imageRotation.rotation.y = targetX + deltaX * 0.01;
			imageRotation.rotation.x = targetY + deltaY * 0.01;
		}
	},
	false
);
document.addEventListener(
	'mouseup',
	function (event) {
		mouseDown = false;
	},
	false
);
document.addEventListener(
	'wheel',
	function (event) {
		var delta = event.deltaY;
		var zoomFactor = 1 + delta * 0.001; // 缩放系数
		camera.position.multiplyScalar(zoomFactor); // 相机位置乘以缩放系数
	},
	false
);
