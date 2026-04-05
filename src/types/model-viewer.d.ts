import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        autoplay?: boolean;
        "auto-rotate"?: boolean;
        "disable-pan"?: boolean;
        "disable-zoom"?: boolean;
        "camera-controls"?: boolean;
        "interaction-prompt"?: string;
        exposure?: string;
        "shadow-intensity"?: string;
        "shadow-softness"?: string;
        "camera-orbit"?: string;
        "field-of-view"?: string;
        "rotation-per-second"?: string;
        "environment-image"?: string;
        loading?: string;
      };
    }
  }
}

export {};
