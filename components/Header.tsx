"use client";

import * as React from "react";
import { ModeToggle } from "@/components/mode-toggle";

export const Header = () => {
  return (
    <div className="py-8 px-10 flex items-center justify-between">
      <div className="font-medium text-4xl">ランダム猫</div>
      <div className="flex items-center">
        <ModeToggle />
      </div>
    </div>
  );
};
