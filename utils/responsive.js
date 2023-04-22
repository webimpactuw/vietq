import { useMediaQuery } from "react-responsive";

// Responsive Breakpoints based on Tailwind CSS
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

// Custom hook to check if the screen is smaller than a breakpoint
export function useBreakpoint(breakpoint) {
  return useMediaQuery({
    query: `(max-width: ${breakpoints[breakpoint]}px)`,
  });
}
