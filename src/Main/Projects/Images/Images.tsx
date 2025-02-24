import { useImages } from "../hooks/useImages";
import ImageNav from "../ImageNav/ImageNav";
import classes from "./Images.module.css";

export default function Images({ imgLinks }: Props) {
  const [images, currIdx, setHover, nextImg] = useImages(imgLinks);

  return (
    <div
      className={classes.container}
      onMouseEnter={() => {
        nextImg();
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {images.map((image, idx) => {
        return (
          <img
            key={idx}
            src={image.src}
            className={idx === currIdx ? classes.front : classes.image}
          />
        );
      })}
      <ImageNav num={imgLinks.length} currIdx={currIdx} nextImg={nextImg} />
    </div>
  );
}

type Props = {
  imgLinks: string[];
};
