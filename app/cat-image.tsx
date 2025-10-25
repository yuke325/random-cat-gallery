"use client";

import { useState } from "react";
import Image from "next/image";
import { fetchCatImages } from "./fetch-image";
import type { CatImageData } from "./types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ボタンを押すと猫の画像を取得表示するコンポーネント
export function CatImage({ images }: { images: CatImageData[] }) {
  // 表示する猫画像データ
  const [imageData, setImageData] = useState<CatImageData[]>(images);
  // 取得中のローディング状態
  const [isLoading, setIsLoading] = useState(false);
  // エラーメッセージ
  const [error, setError] = useState<string | null>(null);

  // 新しい猫の画像を取得しステートを更新、エラーハンドリング&ローディング状態を管理
  const refreshImages = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const catImages = await fetchCatImages();
      setImageData(catImages);
    } catch (err) {
      setError("猫ちゃんは来なかった...");
      console.error("画像取得エラー:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2 pt-4 px-4">
      {/* ローディング表示 */}
      {isLoading && (
        <p className="text-5xl font-bold text-primary p-40">にゃんこ待ち...</p>
      )}

      {/* 画像カルーセル表示 */}
      {!isLoading && imageData.length > 0 && (
        <Carousel className="w-[80vh]">
          <CarouselContent>
            {imageData.map((image, index) => (
              <CarouselItem key={`${image.url}-${index}`}>
                <div>
                  <Card>
                    <CardContent className="flex items-center justify-center p-2 h-[60vh]">
                      <Image
                        src={image.url}
                        alt={`random-cat-${index + 1}`}
                        width={image.width}
                        height={image.height}
                        priority={true}
                        className="object-contain w-full h-full"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}

      {/* エラー表示 */}
      {error && <p className="text-5xl font-bold p-10 text-red-500">{error}</p>}

      {/* 画像取得ボタン */}
      <Button
        onClick={refreshImages}
        disabled={isLoading}
        size="lg"
        className="text-background font-bold"
      >
        新しいにゃんこ
      </Button>
    </div>
  );
}
