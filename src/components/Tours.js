import React from "react";
import Title from "./Title";
import { toursData } from "../data";
const Tours = () => {
  return (
    <section class="section" id="tours">
      <Title title={"featured"} subtitle={"tours"}></Title>

      <div class="section-center featured-center">
        {toursData.map(
          ({ src, date, title, text, location, days, cost, id }) => {
            return (
              <article class="tour-card" key={id}>
                <div class="tour-img-container">
                  <img src={src} class="tour-img" alt="" />
                  <p class="tour-date">{date}</p>
                </div>
                <div class="tour-info">
                  <div class="tour-title">
                    <h4>{title}</h4>
                  </div>
                  <p>{text}</p>
                  <div class="tour-footer">
                    <p>
                      <span>
                        <i class="fas fa-map"></i>
                      </span>{" "}
                      {location}
                    </p>
                    <p>{days}</p>
                    <p>{cost}</p>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Tours;
