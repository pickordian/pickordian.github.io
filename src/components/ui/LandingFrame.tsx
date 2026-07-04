"use client";
import { motion, cubicBezier } from "framer-motion";
import useScreenSpacing from "@/src/hooks/useScreenSpacing";

const LandingFrame = () => {
  const {
    screenSize,
    outerCurveSize,
    innerCurveSize,
    outerOffSet,
    innerOffSet,
  } = useScreenSpacing();
  const oHorizontalToCurve =
    screenSize.width - outerCurveSize.width - outerOffSet.x;
  const iHorizontalToCurve =
    screenSize.width - innerCurveSize.width - innerOffSet.x;

  const outerTopRightCurve = `${oHorizontalToCurve} ${outerCurveSize.height + outerOffSet.y - outerCurveSize.height * (16 / 56)} ${oHorizontalToCurve + outerCurveSize.width * (14 / 54)} ${outerCurveSize.height + outerOffSet.y} ${oHorizontalToCurve + outerCurveSize.width} ${outerCurveSize.height + outerOffSet.y}`;
  const outerTopLeftCurve = `${outerCurveSize.width + outerOffSet.x} ${outerCurveSize.height + outerOffSet.y - outerCurveSize.height * (16 / 56)} ${outerOffSet.x + outerCurveSize.width * (40 / 54)} ${outerCurveSize.height + outerOffSet.y} ${outerOffSet.x} ${outerCurveSize.height + outerOffSet.y}`;
  const outerBottomRightCurve = `${oHorizontalToCurve + outerCurveSize.width * (14 / 54)} ${screenSize.height - outerCurveSize.height - outerOffSet.y} ${oHorizontalToCurve} ${screenSize.height - outerCurveSize.height * (40 / 56) - outerOffSet.y} ${oHorizontalToCurve} ${screenSize.height - outerOffSet.y}`;
  const outerBottomLeftCurve = `${outerCurveSize.width + outerOffSet.x - outerCurveSize.width * (14 / 54)} ${screenSize.height - outerCurveSize.height - outerOffSet.y} ${outerCurveSize.width + outerOffSet.x} ${screenSize.height - outerOffSet.y - outerCurveSize.height * (40 / 56)} ${outerCurveSize.width + outerOffSet.x} ${screenSize.height - outerOffSet.y}`;

  const innerTopRightCurve = `${iHorizontalToCurve} ${innerOffSet.y + innerCurveSize.height * (37 / 52)} ${iHorizontalToCurve + innerCurveSize.width * (29 / 74)} ${innerOffSet.y + innerCurveSize.height * (62 / 52)} ${iHorizontalToCurve + innerCurveSize.width} ${innerOffSet.y + innerCurveSize.height}`;
  const innerTopLeftCurve = `${innerCurveSize.width + innerOffSet.x} ${innerOffSet.y + innerCurveSize.height * (37 / 52)} ${innerCurveSize.width + innerOffSet.x - innerCurveSize.width * (29 / 74)} ${innerOffSet.y + innerCurveSize.height * (62 / 52)} ${innerOffSet.x} ${innerOffSet.y + innerCurveSize.height}`;
  const innerBottomRightCurve = `${iHorizontalToCurve + innerCurveSize.width * (29 / 74)} ${screenSize.height - innerOffSet.y - innerCurveSize.height * (62 / 52)} ${iHorizontalToCurve} ${screenSize.height - innerOffSet.y - innerCurveSize.height * (37 / 52)} ${iHorizontalToCurve} ${screenSize.height - innerOffSet.y}`;
  const innerBottomLeftCurve = `${innerCurveSize.width + innerOffSet.x - innerCurveSize.width * (29 / 74)} ${screenSize.height - innerOffSet.y - innerCurveSize.height * (62 / 52)} ${innerCurveSize.width + innerOffSet.x} ${screenSize.height - innerOffSet.y - innerCurveSize.height * (37 / 52)} ${innerCurveSize.width + innerOffSet.x} ${screenSize.height - innerOffSet.y}`;

  const framePath = {
    innerLeft: `M${screenSize.width / 2 + 0.5} ${innerOffSet.y}H${innerCurveSize.width + innerOffSet.x} C${innerTopLeftCurve} V${screenSize.height - innerCurveSize.height - innerOffSet.y} C${innerBottomLeftCurve} H${screenSize.width / 2 + 0.5}`,
    innerRight: `M${screenSize.width / 2 - 0.5} ${innerOffSet.y}H${iHorizontalToCurve} C${innerTopRightCurve} V${screenSize.height - innerCurveSize.height - innerOffSet.y} C${innerBottomRightCurve} H${screenSize.width / 2 - 0.5}`,
    outterLeft: `M${screenSize.width / 2 + 0.5} ${outerOffSet.y}H${outerCurveSize.width + outerOffSet.x} C${outerTopLeftCurve} V${screenSize.height - outerCurveSize.height - outerOffSet.y} C${outerBottomLeftCurve} H${screenSize.width / 2 + 0.5}`,
    outterRight: `M${screenSize.width / 2 - 0.5} ${outerOffSet.y}H${oHorizontalToCurve} C${outerTopRightCurve} V${screenSize.height - outerCurveSize.height - outerOffSet.y} C${outerBottomRightCurve} H${screenSize.width / 2 - 0.5}`,
  };

  const innerEase = cubicBezier(0.3, 0.1, 0.6, 1);
  const outerEase = cubicBezier(0.1, 0.1, 0.7, 1);

  return (
    <div className="fixed top-0 left-0 w-full h-full" aria-hidden="true">
      <div className="absolute top-0 left-0 w-full h-[8rem] bg-[linear-gradient(to_bottom,_var(--background),_transparent)]"></div>
      <motion.svg
        className="absolute top-0 left-0 w-full p-[var(--frame-margin)] h-full background"
        viewBox={`0 0 ${screenSize.width} ${screenSize.height}`}
        fill="none"
      >
        <motion.path
          d={framePath.outterRight}
          stroke="var(--primary)"
          strokeWidth={outerCurveSize.strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: outerEase }}
        />
        <motion.path
          d={framePath.outterLeft}
          stroke="var(--primary)"
          strokeWidth={outerCurveSize.strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: outerEase }}
        />
        <motion.path
          d={framePath.innerRight}
          stroke="var(--primary)"
          strokeWidth={innerCurveSize.strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: innerEase }}
        />
        <motion.path
          d={framePath.innerLeft}
          stroke="var(--primary)"
          strokeWidth={innerCurveSize.strokeWidth}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: innerEase }}
        />
      </motion.svg>
    </div>
  );
};

export default LandingFrame;
