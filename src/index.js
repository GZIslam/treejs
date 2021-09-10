import "./index.sass";

import { BoxBufferGeometry, BoxGeometry, Color, MaterialLoader, Mesh, MeshBasicMaterial, ObjectLoader, PerspectiveCamera, Scene, ShaderMaterial, WebGL1Renderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const renderer = new WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new Scene();
// scene.background = new Color("#00000");
const controls = new OrbitControls(camera, renderer.domElement);

// console.log(renderer);
// console.log(camera);
// console.log(controls);
// console.log(scene);

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({color: "#767aff", wireframe: true, wireframeLinewidth: 6});


let cube;
let glbLoader = new GLTFLoader();
glbLoader.load("./assets/model.glb", function(gltf) {
    cube = gltf.scene;
    scene.add(cube);

    
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;
        cube.rotation.z += 0.005;
    }
    animate();
});
