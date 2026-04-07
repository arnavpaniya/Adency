"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

/**
 * FacebookPixelEvents component
 * 
 * Specifically listens to pathname and searchParams changes to fire 
 * 'PageView' events in the Meta Pixel. This is necessary for SPA-style
 * navigation in the Next.js App Router.
 */
function FacebookPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      // Standard PageView tracking
      (window as any).fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * FacebookPixel Main Component
 * 
 * Wraps the event listener in Suspense because `useSearchParams` 
 * triggers a client-side de-optimization if used in a root layout
 * without a Suspense boundary.
 */
export default function FacebookPixel() {
  return (
    <Suspense fallback={null}>
      <FacebookPixelEvents />
    </Suspense>
  );
}
