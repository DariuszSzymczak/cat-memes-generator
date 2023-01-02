import React, { ReactNode } from "react";
import styles from "./Circle.module.scss";

type CircleProps = {
  color: string;
  children: JSX.Element;
};

export const Circle: React.FunctionComponent<CircleProps> = (
  props: CircleProps
) => {
  return (
    <div
      className={styles.circle}
      style={{ backgroundColor: props.color }}
    >
      {props.children}
    </div>
  );
};
export default Circle;
