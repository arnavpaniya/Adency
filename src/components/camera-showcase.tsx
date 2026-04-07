"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * CAMERA SHOWCASE COMPONENT
 * 
 * Provides an interactive 3D view of the professional camera gear.
 * Uses <model-viewer> web component for high-performance rendering.
 */
export default function CameraShowcase() {
  const modelRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // 1. Client-side only import for <model-viewer> with duplicate registration check
    if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
      import("@google/model-viewer").catch(err => {
         console.error("Failed to load <model-viewer> engine:", err);
      });
    }

    const modelViewer = modelRef.current;
    if (modelViewer) {
      // 2. Set up event listeners for detailed diagnostics
      const handleLoad = () => {
        console.log("3D Model successfully initialized from /assets/camera3d.glb");
        setIsLoaded(true);
        
        // Force opaque mode to fix material ghosting issues
        const materials = modelViewer.model?.materials;
        if (materials) {
          materials.forEach((material: any) => {
            material.setAlphaMode('OPAQUE');
          });
        }
      };

      const handleError = (error: any) => {
        console.error("3D Model Loading Failed:", error);
        setLoadError(true);
      };

      modelViewer.addEventListener('load', handleLoad);
      modelViewer.addEventListener('error', handleError);

      return () => {
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
      };
    }
  }, []);

  return (
    <section className="relative py-20 md:py-32 px-6 bg-white overflow-hidden flex flex-col items-center">
      {/* Decorative Background Icon (Static, High Fidelity) */}
      <div className="decorative-icon -left-32 top-1/2 -translate-y-1/2 opacity-[0.12] scale-[1.2] md:scale-[2] pointer-events-none">
        <Image src="/assets/icons/icon10.png" alt="" width={500} height={500} />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-7xl font-black text-[#1a1512] tracking-tighter uppercase leading-[0.9]">
            Cinematic <br/><span className="text-orange-500">Hardware.</span>
          </h2>
          <p className="text-gray-500 mt-4 md:mt-6 text-base md:text-lg font-medium max-w-xl mx-auto">
            We use industry-leading gear to capture every detail of your brand's unique story. 
          </p>
        </motion.div>

        {/* 3D Model Viewer Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[800px] cursor-grab active:cursor-grabbing"
        >
          {/* 3. <model-viewer> implementation with absolute path and diagnostics */}
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
            loading="lazy"
            style={{ width: '100%', height: '100%', outline: 'none' } as any}
          >
            {/* Custom fallback loader */}
            {!isLoaded && !loadError && (
              <div slot="poster" className="absolute inset-0 flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.3em] text-orange-500 animate-pulse">Initializing 3D Asset</p>
                </div>
              </div>
            )}

            {/* Error UI */}
            {loadError && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-50/50 backdrop-blur-sm">
                <div className="max-w-xs text-center p-8 bg-white rounded-3xl shadow-xl border border-red-100">
                  <p className="text-red-500 font-black uppercase text-xs tracking-widest mb-2">3D Load Error</p>
                  <p className="text-gray-500 text-sm font-medium mb-6">Failed to load from <code className="text-red-400">/assets/camera3d.glb</code></p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="px-6 py-2.5 bg-red-500 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
          </model-viewer>
          
          <div className="absolute bottom-6 md:bottom-10 left-6 right-6 md:left-12 md:right-12 flex justify-between items-end pointer-events-none">
            <div className="text-[0.55rem] md:text-[0.65rem] font-bold text-gray-400 uppercase tracking-[0.3em]">
               Interactive 3D Preview
            </div>
            <div className="hidden md:block text-[0.65rem] font-bold text-gray-300 uppercase tracking-[0.3em]">
               SCROLL TO ZOOM • DRAG TO ROTATE
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Icon */}
      <div className="decorative-icon -right-40 bottom-10 opacity-[0.08] scale-[1] md:scale-[1.5] rotate-12 pointer-events-none">
        <Image src="/assets/icons/icon1.png" alt="" width={400} height={400} />
      </div>

      {/* TypeScript global declaration for <model-viewer> */}
      <style jsx global>{`
        model-viewer {
          --progress-bar-color: #f97316;
          --progress-bar-height: 2px;
        }
      `}</style>
    </section>
  );
}

// Ensure the window object includes the model-viewer element in TS
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}
