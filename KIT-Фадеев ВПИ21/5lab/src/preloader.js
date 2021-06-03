import React from "react";
import loader from "./Settings.gif";

const Preloader = (props) => {
  return (
    <div className="Preloader">
      <div className="prel2">
        <p>Минуточку...</p>{" "}
        <p>
          Загружаю пользователей...
          <section className="one-fourth" id="html">
            <img src={loader} />
          </section>
        </p>
      </div>
    </div>
  );
};

export default Preloader;
