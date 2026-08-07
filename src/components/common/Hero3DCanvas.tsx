import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Interactive WebGL 3D Architectural Scene for Parjane Buildcon Hero.
 * Renders a 3D building skyscraper wireframe structure with floating gold ambient particles
 * and reactive mouse tilt movement.
 */
export function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f172a, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 15, 45);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // 1. Create 3D Skyscraper Building Structure
    const buildingGroup = new THREE.Group();

    // Central Tower Geometry
    const mainGeo = new THREE.BoxGeometry(12, 38, 12);
    const mainEdges = new THREE.EdgesGeometry(mainGeo);
    const goldMat = new THREE.LineBasicMaterial({
      color: 0xc8a96a,
      transparent: true,
      opacity: 0.65,
    });
    const mainWireframe = new THREE.LineSegments(mainEdges, goldMat);
    mainWireframe.position.y = 19;
    buildingGroup.add(mainWireframe);

    // Secondary Tier Towers
    const tier1Geo = new THREE.BoxGeometry(16, 20, 16);
    const tier1Edges = new THREE.EdgesGeometry(tier1Geo);
    const navyMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const tier1Wireframe = new THREE.LineSegments(tier1Edges, navyMat);
    tier1Wireframe.position.y = 10;
    buildingGroup.add(tier1Wireframe);

    // Spire / Crown Antenna
    const spireGeo = new THREE.CylinderGeometry(0.1, 0.4, 12, 8);
    const spireMat = new THREE.MeshBasicMaterial({ color: 0xe5c384, wireframe: true });
    const spireMesh = new THREE.Mesh(spireGeo, spireMat);
    spireMesh.position.y = 44;
    buildingGroup.add(spireMesh);

    scene.add(buildingGroup);

    // 2. Floating Gold Ambient Particles
    const particleCount = 400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color(0xc8a96a);
    const cyanColor = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = Math.random() * 80 - 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;

      const mix = Math.random();
      const col = mix > 0.3 ? goldColor : cyanColor;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 3. Mouse Interaction & Tilt Logic
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", onMouseMove);

    // 4. Resize Handler
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", onResize);

    // 5. Animation Loop
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // Rotate building group continuously
      buildingGroup.rotation.y += 0.003;
      particles.rotation.y += 0.001;

      // Smooth camera interpolation towards mouse
      targetX += (mouseX * 8 - targetX) * 0.05;
      targetY += (-mouseY * 5 - targetY) * 0.05;

      camera.position.x = targetX;
      camera.position.y = 15 + targetY;
      camera.lookAt(0, 18, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0" />;
}
