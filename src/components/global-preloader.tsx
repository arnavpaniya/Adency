"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "./preloader";

export function GlobalPreloader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show preloader on route change
    setLoading(true);

    // Hide preloader after a short duration (simulated load)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <Preloader key="global-preloader" onComplete={() => setLoading(false)} />
      )}
    </AnimatePresence>
  );
}
