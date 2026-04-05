"use client";

import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/918764756818?text=Hi%20I%20want%20to%20book%20a%20video"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-[40] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="w-8 h-8"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.441-1.273.606-1.446c.163-.171.358-.214.48-.214.122 0 .242 0 .348.005.109.005.253-.042.394.301.144.349.49.1203.535 1.297.043.093.085.203.013.344-.071.144-.112.235-.224.348s-.234.254-.337.352c-.114.108-.233.226-.104.452.126.216.568.939 1.228 1.528.854.761 1.567 1.001 1.782 1.109.214.108.341.09.467-.056.126-.145.545-.632.693-.848.148-.216.29-.18.49-.104.201.077 1.267.597 1.485.706.215.107.359.16.41.25.05.089.05.523-.094.928z"/>
        <path d="M19.011 4.965C17.135 3.091 14.646 2.057 12 2.057c-5.465 0-9.914 4.45-9.916 9.913-.001 1.748.455 3.454 1.319 4.957L2 22l5.215-1.368c1.455.794 3.1 1.213 4.78 1.214h.004c5.462 0 9.913-4.45 9.916-9.912.001-2.648-1.026-5.138-2.904-7.014v.045zm-7.01 14.664h-.002c-1.474 0-2.918-.396-4.181-1.144l-.299-.178-3.111.815.83-3.033-.195-.31c-.822-1.31-1.256-2.825-1.256-4.385 0-4.502 3.665-8.167 8.168-8.167 2.181 0 4.234.85 5.776 2.392s2.394 3.593 2.394 5.777c0 4.505-3.665 8.17-8.169 8.17v.063z"/>
      </svg>
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-black text-sm font-semibold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-max">
        Chat with us
      </div>
    </motion.a>
  );
}
