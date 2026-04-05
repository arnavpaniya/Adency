"use client";

import React, { Suspense, useRef, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { 
  useGLTF, 
  PresentationControls, 
  Environment, 
  Center, 
  Stage,
  Float
} from "@react-three/drei";
import * as THREE from "three";

function CameraModel() {
  const { scene } = useGLTF("/assests/camera3d.glb");
  
  // Clean the scene and hide non-mesh elements (helpers, lights, etc.)
  useMemo(() => {
    scene.traverse((obj) => {
      // Only hide specific "artifact" objects, don't hide structural Groups/Object3Ds
      if (
        obj.name.toLowerCase().includes("helper") ||
        (obj as any).isLight || 
        (obj as any).isCamera ||
        obj.name.toLowerCase().includes("arrow")
      ) {
        obj.visible = false;
      }
      
      // Ensure meshes cast and receive shadows
      if (obj instanceof THREE.Mesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

export default function HowWeWorkCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Prevent hydration mismatch by only rendering the component on the client
  if (!mounted) return null;

  return (
    <section 
      ref={sectionRef}
      className={`hww-cta-section relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100": "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6 py-24 lg:py-40">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className={`w-full lg:w-1/2 space-y-10 z-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="space-y-6">
              <span className="inline-block px-5 py-2 rounded-full bg-blue-100/50 text-blue-700 font-bold text-sm tracking-widest uppercase">
                From Idea to Delivery
              </span>
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                We handle <span className="text-blue-600">everything</span> — <br />
                you just get results.
              </h2>
            </div>

            <p className="text-xl lg:text-2xl text-gray-600/90 leading-relaxed max-w-2xl font-medium">
              The full video production cycle managed by experts. From strategy and high-end filming to final delivery, we scale your content while you focus on growth.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3 px-6 py-3 bg-white border border-blue-100 rounded-2xl shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] animate-pulse" />
                <span className="text-sm font-bold text-gray-800 tracking-tight">Pay Only After Delivery</span>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="#plans" 
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-blue-600 text-white font-bold text-xl rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.2)] hover:bg-blue-700 transition-all active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore Plans
                  <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ width: '1.5rem', height: '1.5rem' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right 3D Element */}
          <div className={`w-full lg:w-1/2 h-[500px] lg:h-[700px] relative transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}>
            {/* Ambient Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-200/20 rounded-full blur-[120px] -z-0 pointer-events-none animate-pulse" />
            
            <Canvas
              shadows
              camera={{ position: [0, 0, 10], fov: 25 }}
              dpr={[1, 2]}
              className="z-10 cursor-grab active:cursor-grabbing"
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <Stage environment="studio" intensity={0.5} shadows="contact">
                  <PresentationControls
                    global
                    speed={1.5}
                    rotation={[0, -0.2, 0]}
                    polar={[-Math.PI / 10, Math.PI / 10]}
                    azimuth={[-Math.PI / 4, Math.PI / 4]}
                  >
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                      <Center>
                        <CameraModel />
                      </Center>
                    </Float>
                  </PresentationControls>
                </Stage>
                <Environment preset="city" />
              </Suspense>
            </Canvas>
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] bg-white rounded-full blur-[140px] -z-10" />
    </section>
  );
}