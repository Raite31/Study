import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.126.1/build/three.module.js';
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.126.1/examples/jsm/controls/OrbitControls.js';

// 场景 相机 渲染器
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 820);
// 监听窗口大小的变化
window.addEventListener('resize', function () {
	// 更新渲染器的大小
	renderer.setSize(window.innerWidth, 820);
});
document.getElementById('cylinder').appendChild(renderer.domElement);

// 设置圆柱体模型
var cylinderRadius = 30;
var cylinderHeight = 100;
var numImages = 30;
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
	color: 0xffffff, // 白色
	opacity: 0.4, // 不透明度
	transparent: true, // 开启透明度
	side: THREE.DoubleSide, // 双面渲染
	blending: THREE.AdditiveBlending, // 加法混合
	depthWrite: false, // 禁止写入深度缓冲区
});
var cylinder2 = new THREE.Mesh(cylinderGeometry2, cylinderMaterial2);
scene.add(cylinder2);

// 设置图片
var imagePaths = [
	'image/image1.png',
	'image/image2.png',
	'image/image3.png',
	'image/image4.png',
	'image/image5.png',
	'image/image6.png',
	'image/image1.png',
	'image/image2.png',
	'image/image3.png',
	'image/image4.png',
	'image/image5.png',
	'image/image6.png',
	'image/image1.png',
	'image/image2.png',
	'image/image3.png',
	'image/image4.png',
	'image/image5.png',
	'image/image6.png',
	'image/image1.png',
	'image/image2.png',
	'image/image3.png',
	'image/image4.png',
	'image/image5.png',
	'image/image6.png',
	'image/image1.png',
	'image/image2.png',
	'image/image3.png',
	'image/image4.png',
	'image/image5.png',
	'image/image6.png',

	// 添加更多的图片路径...
];

var imageMaterials = [];
for (var i = 0; i < imagePaths.length; i++) {
	var imageTexture = new THREE.TextureLoader().load(imagePaths[i]);
	var imageMaterial = new THREE.MeshBasicMaterial({
		map: imageTexture,
		side: THREE.DoubleSide,
	});
	imageMaterials.push(imageMaterial);
}

var imageWidth = 10;
var imageLe = 10;
var imageMargin = 1.3;
var imageRadius = (numImages * (imageWidth + imageMargin)) / (2 * Math.PI);
var imageAngle = (imageWidth + imageMargin) / imageRadius;
var imageRotation = new THREE.Object3D();
var center = new THREE.Vector3(0, 0, 0);

for (var i = 0; i < numImages; i++) {
	var image = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 15),
		imageMaterials[i]
	);
	var image2 = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 15),
		imageMaterials[i]
	);
	var image3 = new THREE.Mesh(
		new THREE.PlaneGeometry(10, 15),
		imageMaterials[i]
	);

	var angle = i * imageAngle;

	var x = imageRadius * Math.sin(angle);
	var y = (i % 2 === 0 ? 1 : -1) * (imageWidth / 2);
	var z = imageRadius * Math.cos(angle);

	image.position.set(x, y, z);
	image2.position.set(x, y + 20, z);
	image3.position.set(x, y - 20, z);

	var lookAtAngle = Math.atan2(
		center.z - image.position.z,
		center.x - image.position.x
	);
	image.rotation.y = -lookAtAngle - Math.PI / 2;
	image2.rotation.y = -lookAtAngle - Math.PI / 2;
	image3.rotation.y = -lookAtAngle - Math.PI / 2;
	image.rotation.z = -Math.PI / 4;
	image2.rotation.z = -Math.PI / 4;
	image3.rotation.z = -Math.PI / 4;

	imageRotation.add(image);
	imageRotation.add(image2);
	imageRotation.add(image3);
}
scene.add(imageRotation);

// 设置灯光
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);
camera.position.z = 70;
var mouseDown = false;
var mouseX = 0;
var mouseY = 0;
var targetX = 0;
var targetY = 0;
var autoRotateSpeed = 0.001;

function animate() {
	requestAnimationFrame(animate);
	TWEEN.update(); // 更新Tween动画
	if (!mouseDown) {
		imageRotation.rotation.y += autoRotateSpeed;
	}
	renderer.render(scene, camera);
}
animate();

// 鼠标动作监控
var dragSpeed = 0.01; // 拖拽速度
var dragTween = null;
var startX = 0; // 保存鼠标按下时的X坐标
// 鼠标动作监控
document.getElementById('cylinder').addEventListener(
	'mousedown',
	function (event) {
		mouseDown = true;
		mouseX = event.clientX;
		mouseY = event.clientY;
		targetX = imageRotation.rotation.y;
		targetY = imageRotation.rotation.x;
		startX = event.clientX; // 记录鼠标按下时的X坐标
		if (dragTween) dragTween.stop(); // 停止之前的Tween动画
	},
	false
);
document.getElementById('cylinder').addEventListener(
	'mousemove',
	function (event) {
		if (mouseDown) {
			var deltaX = event.clientX - mouseX;
			imageRotation.rotation.y = targetX + deltaX * dragSpeed;
		}
	},
	false
);
document.getElementById('cylinder').addEventListener(
	'mouseup',
	function (event) {
		mouseDown = false;
		// 创建Tween动画，使图片平滑过渡到目标角度
		var endX = event.clientX; // 获取鼠标释放时的X坐标
		var distance = endX - startX; // 计算滑动距离
		if (dragTween) dragTween.stop(); // 停止之前的Tween动画
		if (distance > 0) {
			targetX = imageRotation.rotation.y + 1;
		} else {
			targetX = imageRotation.rotation.y - 1;
		}
		dragTween = new TWEEN.Tween(imageRotation.rotation)
			.to({ y: targetX, x: targetY }, 1200)
			.easing(TWEEN.Easing.Quadratic.Out)
			.start();
	},
	false
);

document.getElementById('cylinder').addEventListener(
	'wheel',
	function (event) {
		var delta = event.deltaY;
		var zoomFactor = 1 + delta * 0.001;
		camera.position.multiplyScalar(zoomFactor);
	},
	false
);

// 非动画部分逻辑
var img = document.getElementById('audio-on');
var img2 = document.getElementById('audio-off');

img.addEventListener('click', function () {
	// 在这里编写点击事件的处理逻辑
	img.style.display = 'none';
	img2.style.display = 'block';
});

img2.addEventListener('click', function () {
	// 在这里编写点击事件的处理逻辑
	img.style.display = 'block';
	img2.style.display = 'none';
});
