"use client";

import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import RotatingText from "@/components/RotatingText";

export const Header = () => {
  return (
    <div className="py-8 px-10 flex items-center justify-between">
      <div className="font-bold text-5xl flex items-center gap-x-2">
        <div className="text-primary">らんだむ</div>
        <RotatingText
          texts={["にゃんこ", "ねこ", "きゃっと"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-background overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
};
