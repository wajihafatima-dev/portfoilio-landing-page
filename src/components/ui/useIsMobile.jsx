import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768; // width in px for mobile breakpoint

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Create a media query for the breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Function to update the state when screen size changes
    const handleChange = (e) => {
      setIsMobile(e.matches);
    };

    // Set initial value
    setIsMobile(mql.matches);

    // Add listener for resize changes
    mql.addEventListener("change", handleChange);

    // Cleanup
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
