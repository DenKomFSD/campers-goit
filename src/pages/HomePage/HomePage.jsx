import React from "react";
import css from "../HomePage/Homepage.module.css";
import Button from "../../components/Button/Button.jsx";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main className={css.home}>
        <div className={css.content}>
          <h1>Campers of your dreams</h1>
          <p>You can find everything you want in our catalog</p>
          <Button className={css.btn}>
            <Link to={"/catalog"} className={css.btn}>
              View Now
            </Link>
          </Button>
        </div>
      </main>
    </>
  );
};

export default HomePage;
