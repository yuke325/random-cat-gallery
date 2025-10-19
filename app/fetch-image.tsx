"use server";

import type { CatImageData } from "./types";
import { CAT_API_KEY } from "./env";

// APIから画像を取得する関数
export async function fetchCatImage(): Promise<CatImageData> {
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    headers: { "x-api-key": CAT_API_KEY },
  });

  if (!res.ok) {
    throw new Error("画像の取得に失敗しました");
  }

  const result = await res.json();
  console.log("画像を取得しました", result[0]);
  return result[0];
}
