import { useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
interface ScreenSize {
  width: number;
  height: number;
  breakpoint: "small" | "medium" | "large";
}
export interface FrameSize {
  width: number;
  height: number;
  strokeWidth: number;
}
const outerSizes: Record<ScreenSize["breakpoint"], FrameSize> = {
  small: { width: 43.6, height: 44.6, strokeWidth: 4 },
  medium: { width: 54, height: 56, strokeWidth: 6 },
  large: { width: 98, height: 100, strokeWidth: 11 },
};
const innerSizes: Record<ScreenSize["breakpoint"], FrameSize> = {
  small: { width: 58, height: 42, strokeWidth: 1.75 },
  medium: { width: 74, height: 52, strokeWidth: 2.5 },
  large: { width: 130, height: 93, strokeWidth: 4 },
};

const useScreenSpacing = () => {
  const handleWindowResize = useDebouncedCallback(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      breakpoint:
        window.innerWidth < 768
          ? "small"
          : window.innerWidth < 1980
            ? "medium"
            : "large",
    });
  }, 250);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
      breakpoint:
        window.innerWidth < 768
          ? "small"
          : window.innerWidth < 1980
            ? "medium"
            : "large",
    });
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 1440,
    height: 1024,
    breakpoint: "medium",
  });
  const outerCurveSize = outerSizes[screenSize.breakpoint];
  const innerCurveSize = innerSizes[screenSize.breakpoint];
  const outerOffSet = {
    x: outerCurveSize.strokeWidth * 1.5 + innerCurveSize.strokeWidth,
    y: outerCurveSize.strokeWidth / 2,
  }; // distance: outerStrokeWidth + half of self stroke width: 3 + inner stroke width: 2.5
  const innerOffSet = {
    x: innerCurveSize.strokeWidth / 2,
    y: outerCurveSize.strokeWidth * 2 + innerCurveSize.strokeWidth / 2,
  }; // OuterStrokeWidth + half of self stroke width: 1 + outer stroke width: 6
  const framePadding = {
    x: innerSizes[screenSize.breakpoint].width + innerOffSet.x,
    y: innerSizes[screenSize.breakpoint].height + innerOffSet.y,
  };
  return {
    screenSize,
    outerCurveSize,
    innerCurveSize,
    outerOffSet,
    innerOffSet,
    framePadding,
  };
};
export default useScreenSpacing;
