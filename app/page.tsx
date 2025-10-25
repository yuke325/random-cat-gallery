import { CatImage } from "./cat-image";
import { fetchCatImages } from "./fetch-image";

// ページの表示と同時に猫の画像を取得して表示する
export default async function Home() {
  const initialImages = await fetchCatImages();
  return <CatImage images={initialImages} />;
}
