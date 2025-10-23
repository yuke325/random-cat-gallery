import { CatImage } from "./cat-image";
import { fetchCatImages } from "./fetch-image";

export default async function Home() {
  const initialImages = await fetchCatImages(5);
  return <CatImage images={initialImages} />;
}
