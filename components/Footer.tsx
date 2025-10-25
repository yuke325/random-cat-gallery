"use client";

import * as React from "react";

export const Footer = () => {
  return (
    <footer className="fixed bottom-4 right-2 z-50 p-2 font-bold">
      <p className="text-primary">
        Powered by
        <a
          href="https://thecatapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-primary text-background p-1.5 m-2"
        >
          The Cat API
        </a>
      </p>
    </footer>
  );
};
