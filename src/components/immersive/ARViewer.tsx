import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

interface ARViewerProps {
  modelUrl?: string;
  position?: { x: number; y: number; z: number };
  onARStart?: () => void;
  onAREnd?: () => void;
}

const ARViewer: React.FC<ARViewerProps> = ({
  modelUrl,
  position = { x: 0, y: 0, z: -1 },
  onARStart,
  onAREnd,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Three.js scene
    sceneRef.current = new THREE.Scene();
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    rendererRef.current = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.xr.enabled = true;

    containerRef.current.appendChild(rendererRef.current.domElement);

    // Add AR button
    const arButton = ARButton.createButton(rendererRef.current, {
      optionalFeatures: ['dom-overlay'],
      domOverlay: { root: document.body },
    });
    document.body.appendChild(arButton);

    // Add basic lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 1, 0);
    sceneRef.current.add(ambientLight, directionalLight);

    // Add a placeholder cube if no model is provided
    if (!modelUrl) {
      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(position.x, position.y, position.z);
      sceneRef.current.add(cube);
    }

    // Animation loop
    const animate = () => {
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    rendererRef.current.setAnimationLoop(animate);

    // Event handlers
    const handleARStart = () => {
      onARStart?.();
    };

    const handleAREnd = () => {
      onAREnd?.();
    };

    rendererRef.current.xr.addEventListener('sessionstart', handleARStart);
    rendererRef.current.xr.addEventListener('sessionend', handleAREnd);

    // Cleanup
    return () => {
      if (rendererRef.current) {
        rendererRef.current.xr.removeEventListener('sessionstart', handleARStart);
        rendererRef.current.xr.removeEventListener('sessionend', handleAREnd);
        rendererRef.current.dispose();
      }
      if (arButton.parentNode) {
        arButton.parentNode.removeChild(arButton);
      }
    };
  }, [modelUrl, position, onARStart, onAREnd]);

  return <div ref={containerRef} className="ar-viewer" />;
};

export default ARViewer;
