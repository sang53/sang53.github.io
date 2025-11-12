import backIcons from "../../../utils/svgIcons/backIcons";
import frontIcons from "../../../utils/svgIcons/frontIcons";
import classes from "./TechItems.module.css";

interface TechItemsProps {
  category: "front" | "back";
}

export default function TechItems({ category }: TechItemsProps) {
  const icons = category === "front" ? frontIcons : backIcons;

  return (
    <div className={classes.iconContainer}>
      {icons.svg}
      {icons.image.map((img) => {
        return (
          <img src={img.src} key={img.alt} alt={img.alt} title={img.alt} />
        );
      })}
    </div>
  );
}
