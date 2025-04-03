import { useImages } from "../hooks/useImages";
import ImageNav from "../ImageNav/ImageNav";
import classes from "./Images.module.css";

export default function Images({ imgLinks }: Props) {
  const [images, currIdx, setHover, nextImg] = useImages(imgLinks);

  return (
    <div className={classes.container}>
      {images.map((image, idx) => {
        return (
          <img
            key={idx}
            src={image.src}
            height="1080"
            width="1920"
            className={idx === currIdx ? classes.front : classes.image}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
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
