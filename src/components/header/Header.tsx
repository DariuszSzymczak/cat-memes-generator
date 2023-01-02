import React from "react";
import styles from "./Header.module.scss";

type Prop = { 
  text: string;
  size: number;
}

export const Header: React.FunctionComponent<Prop> = (props) => {
  return <div>
    <h1 className={styles.header} style={{fontSize:`${props.size}px`}}>{props.text}</h1>
  </div>;
};
export default Header;
