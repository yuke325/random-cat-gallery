import type { CatImageData } from "./types";

// APIから画像を取得する関数
export async function fetchCatImage(): Promise<CatImageData> {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");

  if (!res.ok) {
    throw new Error("画像の取得に失敗しました");
  }

  const result = await res.json();
  return result[0];
}
