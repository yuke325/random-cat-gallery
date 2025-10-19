import { CatImage } from "./cat-image";
import { fetchCatImage } from "./fetch-image";

export default async function Home() {
  const initialImage = await fetchCatImage();
  return (
    <CatImage
      url={initialImage.url}
      width={initialImage.width}
      height={initialImage.height}
    />
  );
}
