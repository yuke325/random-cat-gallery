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
    <div>
      <Button onClick={refreshimage} disabled={isLoading}>
        にゃんこ
      </Button>
      {isLoading && <p>猫待ち...</p>}
      {!isLoading && imageData.url && (
        <Image
          src={imageData.url}
          alt="random-cat"
          width={imageData.width}
          height={imageData.height}
        />
      )}
      {error && <p>{error}</p>}
    </div>
  );
}
