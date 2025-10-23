"use client";

import { useEffect, useState } from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

const catText = ["にゃんこ", "ねこ"];

export function ScrollCatBackground() {
  const [rowCount, setRowCount] = useState(20);

  useEffect(() => {
    const calculateRowCount = () => {
      const viewportHeight = window.innerHeight;
      const isMobile = window.innerWidth < 768;
      const estimatedRowHeight = isMobile ? 40 : 80;
      const calculatedRows =
        Math.ceil(viewportHeight / estimatedRowHeight) + 10;
      setRowCount(Math.max(calculatedRows, 30));
    };

    calculateRowCount();
    window.addEventListener("resize", calculateRowCount);

    return () => window.removeEventListener("resize", calculateRowCount);
  }, []);

  return (
    <ScrollVelocityContainer className="text-4xl font-bold md:text-7xl w-full h-full min-h-screen">
      {Array.from({ length: rowCount }).map((_, index) => {
        const velocity = 15 + (index % 3) * 5;
        const direction = index % 2 === 0 ? 1 : -1;
        const text = catText[index % catText.length];

        return (
          <ScrollVelocityRow
            key={index}
            baseVelocity={velocity}
            direction={direction}
          >
            {text}
          </ScrollVelocityRow>
        );
      })}
    </ScrollVelocityContainer>
  );
}
