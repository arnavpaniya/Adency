"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CameraShowcase() {
  const modelRef = useRef<any>(null);

  useEffect(() => {
    const modelViewer = modelRef.current;
    if (modelViewer) {
      modelViewer.addEventListener('load', () => {
        const materials = modelViewer.model?.materials;
        if (materials) {
          materials.forEach((material: any) => {
            // Force opaque mode to prevent "see-through" ghosting
            material.setAlphaMode('OPAQUE');
          });
        }
      });
    }
  }, []);

  return (
    <section className="relative py-32 px-6 bg-white overflow-hidden flex flex-col items-center">
      {/* Decorative Background Icon (Static, High Fidelity) */}
      <div className="decorative-icon -left-32 top-1/2 -translate-y-1/2 opacity-[0.18] scale-[2] pointer-events-none">
        <Image src="/assets/icons/icon10.png" alt="" width={500} height={500} />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <h2 className="text-4xl md:text-7xl font-black text-[#1a1512] tracking-tighter uppercase leading-[0.9]">
            Cinematic <br/><span className="text-orange-500">Hardware.</span>
          </h2>
          <p className="text-gray-500 mt-6 text-lg font-medium max-w-xl mx-auto">
            We use industry-leading gear to capture every detail of your brand's unique story. 
          </p>
        </motion.div>

        {/* 3D Model Viewer Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] md:h-[800px] cursor-grab active:cursor-grabbing"
        >
          <model-viewer
            ref={modelRef}
            src="/assets/camera3d.glb"
            alt="3D Professional Camera"
            auto-rotate
            camera-controls
            shadow-intensity="2"
            shadow-softness="0.5"
            exposure="1"
            environment-image="neutral"
            interaction-prompt="none"
            style={{ width: '100%', height: '100%', outline: 'none' }}
          ></model-viewer>
          
          <div className="absolute bottom-10 left-12 right-12 flex justify-between items-end pointer-events-none">
            <div className="text-[0.65rem] font-bold text-gray-400 uppercase tracking-[0.3em]">
               Interactive 3D Preview
            </div>
            <div className="hidden md:block text-[0.65rem] font-bold text-gray-300 uppercase tracking-[0.3em]">
               SCROLL TO ZOOM • DRAG TO ROTATE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Another anchor point */}
      <div className="decorative-icon -right-40 bottom-10 opacity-[0.1] scale-[1.5] rotate-12 pointer-events-none">
        <Image src="/assets/icons/icon1.png" alt="" width={400} height={400} />
      </div>
    </section>
  );
}
