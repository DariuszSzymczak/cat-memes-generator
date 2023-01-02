import React from "react";
import Header from "./../components/header/Header.tsx";
import WhiteBox from "./../components/whitebox/WhiteBox.tsx";
import Circle from "./../components/circle/Circle.tsx";
import styles from "./MainView.module.scss";
export const MainView: React.FunctionComponent = () => {
  const [text, setText] = React.useState<string>("");
  const [altText, setAltText] = React.useState<string>(
    "use form to generate a cat"
  );
  const [color, setColor] = React.useState<string>("");

  const formElement = React.useRef<HTMLFormElement | null>(null);
  let timeout: any = null;

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    const tempText = e.currentTarget?.value;
    setAltText("Loading...");
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      if (tempText === "") {
        setAltText("use form to generate a cat");
      } else {
        setAltText("cat could not be generated :<");
      }
      setText(tempText);
    }, 1000);
  };

  const handleColorChange = (e) => {
    setColor(e.currentTarget.value);
  };

  return (
    <div id={styles.mainBox}>
      <img className={styles.catPaw} src="lapka.svg" />
      <Header text="Cat your Day" size={32} />
      <WhiteBox>
        <form ref={formElement}>
          <input
            id={styles.inputText}
            type="text"
            placeholder="meow your text..."
            onKeyUp={handleTextChange}
          />
          <Header text="color" size={26} />
          <div className={styles.circles}>
            <label htmlFor="red">
              <Circle color="red">
                <input
                  type="radio"
                  id="red"
                  name="color"
                  value="red"
                  onChange={handleColorChange}
                />
              </Circle>
            </label>
            <label htmlFor="green">
              <Circle color="green">
                <input
                  type="radio"
                  id="green"
                  name="color"
                  value="green"
                  onChange={handleColorChange}
                />
              </Circle>
            </label>
            <label htmlFor="blue">
              <Circle color="blue">
                <input
                  type="radio"
                  id="blue"
                  name="color"
                  value="blue"
                  onChange={handleColorChange}
                />
              </Circle>
            </label>
          </div>
        </form>
        <img
          className={styles.catImage}
          src={`https://cataas.com/cat/says/${text}?c=${color}`}
          alt={altText}
        />
      </WhiteBox>
    </div>
  );
};
export default MainView;
