import classes from "./ImageNav.module.css";

export default function ImageNav({ num, currIdx, nextImg }: Props) {
  const buttons = [];
  for (let i = 0; i < num; i++)
    buttons.push(
      <span
        key={i}
        className={i === currIdx ? classes.active : classes.navButton}
        onClick={() => {
          nextImg(i);
        }}
      />
    );

  return <div className={classes.navBar}>{buttons}</div>;
}

type Props = {
  num: number;
  currIdx: number;
  nextImg: (newIdx?: number) => void;
};
