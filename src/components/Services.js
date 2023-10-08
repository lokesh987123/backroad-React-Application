import React from "react";
import Title from "./Title";
import { servicesData } from "../data";

const Services = () => {
  return (
    <section class="section services" id="services">
      <Title title={"our"} subtitle={"Services"}></Title>

      <div class="section-center services-center">
        {servicesData.map(({ icon, title, text, id }) => {
          return (
            <article class="service" key={id}>
              <span class="service-icon">
                <i class={icon}></i>
              </span>
              <div class="service-info">
                <h4 class="service-title">{title}</h4>
                <p class="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
