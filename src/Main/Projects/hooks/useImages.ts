import { useEffect, useMemo, useState } from "react";

export function useImages(imgLinks: string[]) {
  const images = useMemo(() => preloadImages(imgLinks), [imgLinks]);
  const [currIdx, setCurrIdx] = useState(0);
  const [hover, setHover] = useState(false);

  // sets new idx if given, otherwise sets next idx (wraps around)
  const nextImg = (newIdx?: number) => {
    if (newIdx !== undefined) setCurrIdx(newIdx);
    else setCurrIdx((currIdx + 1) % images.length);
  };

  // starts animation if hovered
  useEffect(() => {
    if (!hover) return;
    const interval = setInterval(nextImg, 2000);

    return () => {
      clearInterval(interval);
    };
  });

  return [images, currIdx, setHover, nextImg] as const;
}

// preloads images then returns them to keep reference (cached)
function preloadImages(imgLinks: string[]) {
  return imgLinks.map((imgLink) => {
    const image = new Image();
    image.src = getImgUrl(imgLink);
    return image;
  });
}

// converts relative paths saved in ProjectInfo to absolute path
function getImgUrl(relative: string) {
  return new URL(relative, import.meta.url).href;
}
