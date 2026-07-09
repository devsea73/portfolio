"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-30, 30, 18, -18, 0.1, 100);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const isMobile = window.innerWidth <= 768;
    const pipelineGroup = new THREE.Group();
    scene.add(pipelineGroup);

    const layers = isMobile ? [-8, 0, 8] : [-9, -3, 3, 9];
    const columns = isMobile ? [-18, -6, 6, 18] : [-22, -11, 0, 11, 22];
    const nodeRadius = isMobile ? 0.42 : 0.34;
    const nodes = [];

    const nodeGeometry = new THREE.CircleGeometry(nodeRadius, 24);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0b8f87,
      transparent: true,
      opacity: 0.2,
    });

    layers.forEach((y, rowIndex) => {
      columns.forEach((x, colIndex) => {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
        node.position.set(x, y + (colIndex % 2 === 0 ? 0.65 : -0.65), -2);
        pipelineGroup.add(node);
        nodes.push({ mesh: node, rowIndex, colIndex });
      });
    });

    const connectionMaterial = new THREE.LineBasicMaterial({
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.14,
    });

    const paths = [];

    const addConnection = (start, end, bend = 0) => {
      const startPos = start.mesh.position.clone();
      const endPos = end.mesh.position.clone();
      const midX = (startPos.x + endPos.x) / 2;
      const curve = new THREE.QuadraticBezierCurve3(
        startPos,
        new THREE.Vector3(midX, (startPos.y + endPos.y) / 2 + bend, -2),
        endPos,
      );
      const points = curve.getPoints(32);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, connectionMaterial);
      pipelineGroup.add(line);
      paths.push(curve);
      return geometry;
    };

    const disposableGeometries = [];

    nodes.forEach((node) => {
      const right = nodes.find(
        (candidate) =>
          candidate.rowIndex === node.rowIndex && candidate.colIndex === node.colIndex + 1,
      );
      const diagonal = nodes.find(
        (candidate) =>
          candidate.rowIndex === node.rowIndex + 1 && candidate.colIndex === node.colIndex + 1,
      );

      if (right) {
        disposableGeometries.push(addConnection(node, right, 0));
      }

      if (!isMobile && diagonal && node.colIndex % 2 === 0) {
        disposableGeometries.push(addConnection(node, diagonal, 1.2));
      }
    });

    const pulseGeometry = new THREE.CircleGeometry(isMobile ? 0.16 : 0.14, 20);
    const pulseMaterial = new THREE.MeshBasicMaterial({
      color: 0xf97316,
      transparent: true,
      opacity: 0.55,
    });

    const pulseCount = reduceMotion ? 0 : Math.min(paths.length, isMobile ? 4 : 8);
    const pulses = Array.from({ length: pulseCount }, (_, index) => {
      const mesh = new THREE.Mesh(pulseGeometry, pulseMaterial.clone());
      const speed = 0.0009 + (index % 3) * 0.00035;
      const progress = index / Math.max(pulseCount, 1);
      const path = paths[index % paths.length];
      mesh.position.copy(path.getPoint(progress));
      pipelineGroup.add(mesh);
      return { mesh, speed, progress, path };
    });

    const ambientDotsGeometry = new THREE.BufferGeometry();
    const ambientDotsCount = isMobile ? 28 : 46;
    const ambientPositions = new Float32Array(ambientDotsCount * 3);

    for (let index = 0; index < ambientDotsCount; index += 1) {
      const offset = index * 3;
      ambientPositions[offset] = (Math.random() - 0.5) * 60;
      ambientPositions[offset + 1] = (Math.random() - 0.5) * 36;
      ambientPositions[offset + 2] = -6;
    }

    ambientDotsGeometry.setAttribute("position", new THREE.BufferAttribute(ambientPositions, 3));
    const ambientDotsMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.08 : 0.07,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.16,
    });
    const ambientDots = new THREE.Points(ambientDotsGeometry, ambientDotsMaterial);
    scene.add(ambientDots);

    let frameId;
    const animate = () => {
      pipelineGroup.rotation.z = Math.sin(performance.now() * 0.00008) * 0.01;
      ambientDots.rotation.z += 0.00008;

      pulses.forEach((pulse, index) => {
        pulse.progress = (pulse.progress + pulse.speed) % 1;
        pulse.mesh.position.copy(pulse.path.getPoint(pulse.progress));
        pulse.mesh.material.opacity = 0.35 + Math.sin(performance.now() * 0.002 + index) * 0.18;
      });

      nodes.forEach((node, index) => {
        node.mesh.material.opacity = 0.14 + Math.sin(performance.now() * 0.0012 + index * 0.5) * 0.06;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const onResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      const frustumHeight = 36;
      camera.left = (-frustumHeight * aspect) / 2;
      camera.right = (frustumHeight * aspect) / 2;
      camera.top = frustumHeight / 2;
      camera.bottom = -frustumHeight / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      nodeGeometry.dispose();
      pulseGeometry.dispose();
      ambientDotsGeometry.dispose();
      ambientDotsMaterial.dispose();
      connectionMaterial.dispose();
      disposableGeometries.forEach((geometry) => geometry.dispose());
      nodes.forEach((node) => node.mesh.material.dispose());
      pulses.forEach((pulse) => pulse.mesh.material.dispose());
      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="three-bg" ref={containerRef} aria-hidden="true" />;
}
