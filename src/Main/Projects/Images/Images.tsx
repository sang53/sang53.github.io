import { useImages } from "../hooks/useImages";
import classes from "./Images.module.css";

export default function Images({ link, imgLinks }: Props) {
  const [images, currImg, linkRef, startSwap, stopSwap] = useImages(imgLinks);

  return (
    <a
      className={classes.container}
      href={link}
      ref={linkRef}
      onMouseEnter={startSwap}
      onMouseLeave={stopSwap}
    >
      {images.map((image, idx) => {
        return (
          <img
            key={idx}
            src={image.src}
            className={idx === currImg ? classes.front : classes.image}
          />
        );
      })}
    </a>
  );
}

type Props = {
  link: string;
  imgLinks: string[];
};
