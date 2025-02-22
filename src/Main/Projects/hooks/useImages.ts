import { useMemo, useRef, useState } from "react";

export function useImages(imgLinks: string[]) {
  const images = useMemo(() => preloadImages(imgLinks), [imgLinks]);
  const [currImg, setCurrImg] = useState(0);
  const linkRef = useRef<HTMLAnchorElement>(null);
  let currInterval: number | undefined;
  let onTop = currImg;

  const startSwap = () => {
    if (!linkRef.current) return;
    const imgList = linkRef.current.querySelectorAll("img");

    const swap = () => {
      imgList[onTop].style.opacity = "0";
      onTop = (onTop + 1) % imgList.length;
      imgList[onTop].style.opacity = "1";
    };

    swap();
    currInterval = setInterval(swap, 3000);
  };

  const stopSwap = () => {
    clearInterval(currInterval);
    setCurrImg(onTop);
  };

  return [images, currImg, linkRef, startSwap, stopSwap] as const;
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
