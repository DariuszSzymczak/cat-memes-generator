import React, { ReactNode } from "react";
import styles from "./WhiteBox.module.scss";

type WhiteBoxProps = {
  children: JSX.Element
}

export const WhiteBox: React.FunctionComponent<WhiteBoxProps> = (props: WhiteBoxProps ) => {
  return <div className={styles.WhiteBox}>{props.children}</div>;
};
export default WhiteBox;
