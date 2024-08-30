import React from "react";
import css from "../HomePage/Homepage.module.css";
import Button from "../../components/Button/Button.jsx";

const HomePage = () => {
  return (
    <>
      <div className={css.home}>
        <h1>header</h1>
        <p>some text</p>
        <Button className={css.btn}>Click</Button>
      </div>
    </>
  );
};

export default HomePage;
