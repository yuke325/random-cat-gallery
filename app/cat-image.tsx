"use client";

import { useState } from "react";
import Image from "next/image";
import { fetchCatImage } from "./fetch-image";
import type { CatImageData } from "./types";
import { Button } from "@/components/ui/button";

// 画像を再度取得する関数
export function CatImage({ url, width, height }: CatImageData) {
  const [imageData, setImageData] = useState<CatImageData>({
    url,
    width,
    height,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refreshimage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const catImage = await fetchCatImage();
      setImageData(catImage);
    } catch (err) {
      setError("猫ちゃんは来なかった...");
      console.error("画像取得エラー:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center gap-4 p-20">
      {isLoading && (
        <p className="text-5xl font-bold text-primary">にゃんこ待ち...</p>
      )}
      {!isLoading && imageData.url && (
        <div className="p-1 rounded-xl bg-gradient-to-br from-primary to-foreground">
          <Image
            src={imageData.url}
            alt="random-cat"
            width={imageData.width}
            height={imageData.height}
            className="object-contain max-h-[70vh] max-w-full rounded-xl"
          />
        </div>
      )}
      {error && <p>{error}</p>}
      <Button onClick={refreshimage} disabled={isLoading}>
        にゃんこ
      </Button>
    </div>
  );
}
